import { alert } from "../types";
import { DAO } from "./dao.service";

class Service extends DAO<alert>{}

export const alertService = new Service('/alert');