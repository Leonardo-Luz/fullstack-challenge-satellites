import { userInterface } from "../models/users.model";
import { user } from "../types";
import { DAO } from "./dao.service";

export class Service extends DAO<userInterface , user, string>{}