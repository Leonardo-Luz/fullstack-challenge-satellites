import { contactInterface } from "../models/contacts.model";
import { contact } from "../types";
import { DAO } from "./dao.service";

export class Service extends DAO<contactInterface, contact, string>{}