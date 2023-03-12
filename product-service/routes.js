import express from 'express'
const router = express.Router();

import getProductById, * as controller from './user.js';

router.post("/", controller.createNewProduct);
router.get("/:id", getProductById);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

export default router;


