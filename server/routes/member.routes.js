import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {getMembers, getMember, createMember, updateMember, deleteMember} from '../controllers/member.controller.js'

const router = Router();

router.get('/members', authRequired, getMembers)

router.get('/members/:id', authRequired, getMember)

router.post('/members', authRequired, createMember)

router.put('/members/:id', authRequired, updateMember)

router.delete('/members/:id', authRequired, deleteMember)

export default router;