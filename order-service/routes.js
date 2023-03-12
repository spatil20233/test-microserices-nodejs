import express from 'express'
const router = express.Router();

import getOrderByUserId, * as controller from './user.js';

router.post("/", controller.createNewOrder);
router.get("/:id", getOrderByUserId);
router.put("/:id", controller.updateOrder);
router.delete("/:id", controller.deleteOrder);

export default router;


