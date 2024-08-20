import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/messageController';

const router = Router();

router.get('/', getMessages); // Match endpoint
router.post('/send', sendMessage); // Match endpoint

export default router;


