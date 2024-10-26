import { alertInterface } from "../models/alerts.model";
import { alert } from "../types";
import { DAO } from "./dao.service";

export class Service extends DAO<alertInterface, alert>{}