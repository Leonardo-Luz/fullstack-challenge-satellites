import { contact } from "../types";
import { DAO } from "./dao.service";

class Service extends DAO<contact>{}

export const contactService = new Service('/contacts');