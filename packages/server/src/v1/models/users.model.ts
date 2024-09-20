import { Model, Sequelize, STRING } from "sequelize";

import { server } from "../..";
import { user } from "../types";

const sequelize = server.database.sequelize as Sequelize;

export interface userInterface extends Model<user>, user{}

export const UserModel = sequelize.define<userInterface>(
    'user',
    {
        userId: {
            primaryKey: true,
            type: STRING,
        },
        login: {
            allowNull: false,
            type: STRING,
            unique: true,
        },
        password: {
            allowNull: false,
            type: STRING,
        },
        role: {
            allowNull: false,
            type: STRING,
        }
    },
    {
        timestamps: true,
    }
)