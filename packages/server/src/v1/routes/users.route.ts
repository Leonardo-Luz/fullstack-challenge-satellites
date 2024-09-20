import { Router } from "express";

import { Controller } from "../controllers/users.controller";
import { authantication, authorize } from "../middlewares";

const controller = new Controller();

export const router = Router();

router.get('/', authorize, authantication, controller.getAllHandler);
router.get('/:id', authorize, authantication, controller.getByIdHandler);
router.post('/', controller.createHandler);
router.put('/', authorize, authantication, controller.updateHandler);
router.delete('/:id', authorize, authantication, controller.deleteHandler);

// implement -> self delete | self get | self update