import express from 'express';
const router = express.Router();

import { getLikes,addlike,deletelike } from '../controllers/likeController.js'

router.get("/:id",getLikes)
router.post("/:id",addlike)
router.delete("/:id",deletelike)

export default router