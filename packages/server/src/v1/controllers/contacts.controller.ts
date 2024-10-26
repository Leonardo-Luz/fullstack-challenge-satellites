import { Request, response, Response } from "express"
import { v4 as uuidv4 } from "uuid";

import { DAO } from "./dao.controller"
import { Service } from "../services/contacts.service";
import { contact } from "../types";
import { ContactModel } from "../models/contacts.model";

export class Controller implements DAO<contact, string>{
    private service = new Service();
    
    async getByIdHandler( req: Request<{value: string}, {}, {}> , res: Response ): Promise<Response> {
        const id = req.params.value;
        
        const response = this.service.getById( ContactModel, id );

        return res.status(200).json(response);
    }

    async getAllHandler( req: Request<{}, {}, {}> , res: Response ): Promise<Response> {
        const response = this.service.getAll( ContactModel );

        return res.status(200).json(response);
    }

    async createHandler( req: Request<{}, {}, { toCreate: contact }> , res: Response ): Promise<Response> {
        const created = req.body.toCreate;

        const reponse = {
            ...created,
            contactId: uuidv4()
        } as contact

        this.service.create( ContactModel, reponse );

        return res.status(200).json({
            message: "Contact succefully created!",
            body: reponse
        });
    }

    async updateHandler( req: Request<{}, {}, { toUpdate: contact }> , res: Response ): Promise<Response> {
        const updated = req.body.toUpdate;

        const response = await this.service.getById( ContactModel, updated.contactId );

        response && this.service.update( response )

        return response && res.status(200).json({
            message: "Contact succefully updated!",
            body: updated
        })
        || res.status(404).json({ message: "Contact not found!"})
    }

    async deleteHandler( req: Request<{ value: string }, {}, {}> , res: Response ): Promise<Response> {
        const id = req.params.value;

        const response = await this.service.getById( ContactModel, id )

        response && this.service.delete( response );

        return response && res.status(200).json({ message: "Contact succefully deleted!" })
        || res.status(404).json({ message: "Contact not found!"})
    }
}