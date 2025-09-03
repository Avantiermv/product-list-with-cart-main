import express from 'express';
import { testing } from './homeController.js';

export const router = express.Router();
router.get('/', testing);