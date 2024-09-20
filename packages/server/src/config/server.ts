import express, { Application } from "express"

import { port } from "../utils/port";
import { Database } from "./database";

import { 
    alertRouter, 
    contactRouter, 
    userRouter 
} from "../v1/routes";
import { errorHandler, logger, rules } from "../v1/middlewares";

export class Server{
    private app: Application;
    public database: Database;

    constructor(){
        this.app = express();

        this.database = new Database();
        this.databaseSync();

        this.middlewares();

        this.app.use(rules);

        this.routes();

        this.app.use(errorHandler);
    }

    private routes = () => {
        this.app.use('/api/v1/alerts', alertRouter);
        this.app.use('/api/v1/contacts', contactRouter);
        this.app.use('/api/v1/users', userRouter);
    }

    private middlewares = () => {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());

        this.app.use(logger);
    }

    private databaseSync = () => {
        this.database.sequelize?.sync();
    }

    public start = () => {
        this.app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        })
    }
}