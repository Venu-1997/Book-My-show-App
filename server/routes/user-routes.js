import express from 'express';
import { Login, getProfile, register } from '../controllers/userController.js';
import isLoggedIn from '../middlewares/authentication.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',Login);
router.get('/profile', isLoggedIn , getProfile);

export default router;