import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";

const router = Router();

router.get('/task', authRequired, (req, res) => res.send('tasks'))

export default router;