import express from 'express';
const router = express.Router();

import { createGuest } from './Controller.js';

router.route('/create-guest').post(createGuest);

export default router;