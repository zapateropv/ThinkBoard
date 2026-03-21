import express from "express";
import { GetAllPost, InsertPost, UpdatePost, DeletePost } from "../controllers/controller.js";

const router = express.Router()


router.get('/', GetAllPost)
router.post('/create', InsertPost)
router.put('/update/:id', UpdatePost)
router.delete('/delete/:id', DeletePost)

export default router