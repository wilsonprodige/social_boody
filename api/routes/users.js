import express from 'express';
const router = express.Router();

import {getUser,updateUser,getList } from '../controllers/userController.js'


router.get("/",getUser)
router.put("/update",updateUser)
router.get("/getlist",getList )

export default router