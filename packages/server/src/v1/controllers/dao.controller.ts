import { Response, Request } from "express";

export interface DAO<T, Y>{
    getByIdHandler?( req: Request<{value: Y}, {}, {}> , res: Response ): Promise<Response>;
    getAllHandler?( req: Request<{}, {}, {}> , res: Response ): Promise<Response>;

    createHandler?( req: Request<{}, {}, { toCreate: T }> , res: Response ): Promise<Response>;
    updateHandler?( req: Request<{}, {}, { toUpdate: T }> , res: Response ): Promise<Response>;
    
    deleteHandler?( req: Request<{value: Y}, {}, {}> , res: Response ): Promise<Response>;
}