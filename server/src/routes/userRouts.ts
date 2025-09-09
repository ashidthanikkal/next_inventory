import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";

const router = Router();
router.get("/", getUsers); // http://localhost:8000/users
router.post("/",createUser) 

export default router;