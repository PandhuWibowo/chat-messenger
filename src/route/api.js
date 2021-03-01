import express from 'express';
import MessageController from '../controller/message-controller';
import UserController from '../controller/user-controller'

const router = express.Router();

router.get("/", (req, res) => res.json({ status: 200, message: "Welcome to the Chat Messenger." }));

/**
 * Users
 */
router.get('/users', UserController.getUsers)
router.get('/users/:user_id', UserController.getUser)
router.post('/users', UserController.createUser)

/**
 * Messages
 */
router.post('/messages/from/:from_id/to/:to_id/send', MessageController.sendMessage)
router.get('/messages/from/:from_id/show-receiver', MessageController.showReceiver)
router.get('/messages/from/:from_id/to/:to_id/show-message', MessageController.showMessage)

export default router;