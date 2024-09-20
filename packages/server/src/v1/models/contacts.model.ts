import { DOUBLE, INTEGER, Model, Sequelize, STRING, TIME } from "sequelize";

import { server } from "../..";
import { contact } from "../types";

const sequelize = server.database.sequelize as Sequelize;

export interface contactInterface extends Model<contact>, contact{}

export const ContactModel = sequelize.define<contactInterface>(
    'user',
    {
        _id: {
            allowNull: false,
            type: STRING,
            unique: true
        },
        contactId: {
            primaryKey: true,
            type: STRING,
        },
        contactStatus: {
            allowNull: false,
            type: STRING,
        },
        contactName: {
            allowNull: false,
            type: INTEGER,
        },
        contactGround: {
            allowNull: false,
            type: STRING,
        },
        contactSatellite: {
            allowNull: false,
            type: STRING,
        },
        contactEquipment: {
            allowNull: false,
            type: STRING,
        },
        contactState: {
            allowNull: false,
            type: STRING,
        },
        contactStep: {
            allowNull: false,
            type: STRING,
        },
        contactDetail: {
            allowNull: false,
            type: STRING,
        },
        contactBeginTimestamp: {
            allowNull: false,
            type: TIME,
        },
        contactEndTimestamp: {
            allowNull: false,
            type: TIME,
        },
        contactLatitude: {
            allowNull: false,
            type: DOUBLE,
        },
        contactLongitude: {
            allowNull: false,
            type: DOUBLE,
        },
        contactAzimuth: {
            allowNull: false,
            type: DOUBLE,
        },
        contactElevation: {
            allowNull: false,
            type: DOUBLE,
        },
        contactResolution: {
            allowNull: false,
            type: STRING,
        },
        contactResolutionStatus: {
            allowNull: false,
            type: STRING,
        }
    },
    {
        timestamps: true,
        createdAt: "contactBeginTimestamp",
        updatedAt: "contactEndTimestamp",
        deletedAt: false
    }
)