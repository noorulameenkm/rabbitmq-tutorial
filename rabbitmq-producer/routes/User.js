import { publishToQueue } from '../services/MQService';
import { Router } from 'express'
let router = Router();


router.post('/msg', async(req, res, next) => {
    let { queueName, payload } = req.body;
    await publishToQueue(queueName, payload, { persistent: true });
    res.statusCode = 200;
    res.data = { "message-sent": true }
    next();
});

export default router;