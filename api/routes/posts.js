import express from 'express';
const router = express.Router();

import { getPosts,addPost } from '../controllers/postController.js'

router.get("/",getPosts)
router.post("/addpost",addPost)

export default router