import { Request, response, Response } from "express"

import { DAO } from "./dao.controller"
import { Service } from "../services/users.service";
import { user } from "../types";
import { UserModel } from "../models/users.model";

export class Controller implements DAO<user, string>{
    private service = new Service();
    
    async getByIdHandler( req: Request<{ value: string}, {}, {}> , res: Response ): Promise<Response> {
        const id = req.params.value;
        
        const response = this.service.getById( UserModel, id );

        return res.status(200).json(response);
    }

    async getAllHandler( req: Request<{}, {}, {}> , res: Response ): Promise<Response> {
        const response = this.service.getAll( UserModel );

        return res.status(200).json(response);
    }

    async createHandler( req: Request<{}, {}, { toCreate: user }> , res: Response ): Promise<Response> {
        const created = req.body.toCreate;

        this.service.create( UserModel, created );

        return res.status(200).json({
            message: "User succefully created!",
            body: created
        });
    }

    async updateHandler( req: Request<{}, {}, { toUpdate: user }> , res: Response ): Promise<Response> {
        const updated = req.body.toUpdate;

        const response = await this.service.getById( UserModel, updated.userId );

        response && this.service.update( response )

        return response && res.status(200).json({
            message: "Contact succefully updated!",
            body: updated
        })
        || res.status(404).json({ message: "User not found!"})
    }

    async deleteHandler( req: Request<{ value: string }, {}, {}> , res: Response ): Promise<Response> {
        const id = req.params.value;

        const response = await this.service.getById( UserModel, id )

        response && this.service.delete( response );

        return response && res.status(200).json({ message: "User succefully deleted!" })
        || res.status(404).json({ message: "User not found!"})
    }

    async getSelfHandler( req: Request<{}, {}, {}> , res: Response ): Promise<Response> {
        const { userId } = res.locals.payload as user;
        
        const response = this.service.getById( UserModel, userId );

        return res.status(200).json(response);
    }

    async updateSelfHandler( req: Request<{}, {}, { toUpdate: user }> , res: Response ): Promise<Response> {
        const { userId } = res.locals.payload as user;
        const updated = req.body.toUpdate;

        const response = await this.service.getById( UserModel, userId );

        if(response){
            response.dataValues = {
                ...updated,
                userId: userId
            }

            this.service.update( response )

            return res.status(200).json({
                message: "User succefully updated!"
            })
        }
        else return res.status(404).json({ message: "User not found!"})
    }

    async deleteSelfHandler( req: Request<{}, {}, {}> , res: Response ): Promise<Response> {
        const { userId } = res.locals.payload as user;

        const response = await this.service.getById( UserModel, userId )

        response && this.service.delete( response );

        return response && res.status(200).json({ message: "User succefully deleted!" })
        || res.status(404).json({ message: "User not found!"})
    }
}