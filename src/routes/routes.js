import express from 'express';
import { testing } from '../controllers/homeController.js';

export const router = express.Router();
router.get('/', testing);