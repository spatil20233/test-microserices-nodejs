import express from 'express'
const router = express.Router();

import getUserById, * as controller from './user.js';

router.post("/", controller.createNewUser);
router.get("/:id", getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

export default router;


