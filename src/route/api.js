import express from 'express';
import UserController from '../controller/user-controller'

const router = express.Router();

router.get("/", (req, res) => res.json({ status: 200, message: "Welcome to the Chat Messenger." }));

/**
 * Users
 */
router.get('/users', UserController.getUsers)
router.get('/users/:user_id', UserController.getUser)
router.post('/users', UserController.createUser)
export default router;