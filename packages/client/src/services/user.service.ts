import { user } from "../types";
import { DAO } from "./dao.service";

class Service extends DAO<user>{}

export const userService = new Service('/users');