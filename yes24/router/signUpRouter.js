import express from 'express';
import * as signUpController from '../controller/signUpController.js';

const router = express.Router();

router
.post('/', signUpController.signUp)

export default router;