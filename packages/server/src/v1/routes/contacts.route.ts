import { Router } from "express";

import { Controller } from "../controllers/contacts.controller";

const controller = new Controller();

export const router = Router();

router.get('/', controller.getAllHandler);
router.get('/:id', controller.getByIdHandler);
router.post('/', controller.createHandler);
router.put('/', controller.updateHandler);
router.delete('/:id', controller.deleteHandler);
