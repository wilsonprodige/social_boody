import express from 'express';
const router = express.Router();

import { getComments,addComment } from '../controllers/commentController.js'

router.get("/:id",getComments)
router.post("/addcomment/:id",addComment)


export default router