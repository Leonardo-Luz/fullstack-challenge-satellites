import { Request, Response } from "express"

import { DAO } from "./dao.controller"
import { Service } from "../services/alerts.service";
import { alert } from "../types";
import { AlertModel } from "../models/alerts.model";

export class Controller implements DAO<alert, string>{
    private service = new Service();
    
    async getByIdHandler( req: Request<{value: string}, {}, {}> , res: Response ): Promise<Response> {
        const id = req.params.value;
        
        const response = this.service.getById( AlertModel, id );

        return res.status(200).json(response);
    }

    async getAllHandler( req: Request<{}, {}, {}> , res: Response ): Promise<Response> {
        const response = this.service.getAll( AlertModel );

        return res.status(200).json(response);
    }

    async createHandler( req: Request<{}, {}, { toCreate: alert }> , res: Response ): Promise<Response> {
        const created = req.body.toCreate;

        this.service.create( AlertModel, created );

        return res.status(200).json({
            message: "Alert succefully created!",
            body: created
        });
    }

    async updateHandler( req: Request<{}, {}, { toUpdate: alert }> , res: Response ): Promise<Response> {
        const updated = req.body.toUpdate;

        const response = await this.service.getById( AlertModel, updated.errorId );

        response && this.service.update( response )

        return response && res.status(200).json({
            message: "Alert succefully updated!",
            body: updated
        })
        || res.status(404).json({ message: "Alert not found!"})
    }

    async deleteHandler( req: Request<{ value: string }, {}, {}> , res: Response ): Promise<Response> {
        const id = req.params.value;

        const response = await this.service.getById( AlertModel, id )

        response && this.service.delete( response );

        return response && res.status(200).json({ message: "Alert succefully deleted!" })
        || res.status(404).json({ message: "Alert not found!"})
    }
}