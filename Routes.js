import express from 'express';
import rateLimiter from 'express-rate-limit';

const router = express.Router();

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Skúste opäť za 15 minút',
});

import { createGuest } from './Controller.js';

router.route('/create-guest').post(apiLimiter, createGuest);

export default router;
