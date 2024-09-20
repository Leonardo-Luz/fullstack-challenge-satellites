import { BOOLEAN, Model, Sequelize, STRING, TIME } from "sequelize";

import { server } from "../..";
import { alert } from "../types";

const sequelize = server.database.sequelize as Sequelize;

export interface alertInterface extends Model<alert>, alert{}

export const AlertModel = sequelize.define<alertInterface>(
    'user',
    {
        errorId: {
            primaryKey: true,
            type: STRING,
        },
        errorSeverity: {
            allowNull: false,
            type: STRING,
        },
        errorCategory: {
            allowNull: false,
            type: STRING,
        },
        errorMessage: {
            allowNull: false,
            type: STRING,
        },
        longMessage: {
            allowNull: false,
            type: STRING,
        },
        errorTime: {
            allowNull: false,
            type: TIME,
        },
        selected: {
            allowNull: false,
            type: BOOLEAN,
        },
        new: {
            allowNull: false,
            type: BOOLEAN,
        },
        expanded: {
            allowNull: false,
            type: BOOLEAN,
        }
    },
    {
        timestamps: true,
        createdAt: "errorTime",
        updatedAt: false,
        deletedAt: false
    }
)