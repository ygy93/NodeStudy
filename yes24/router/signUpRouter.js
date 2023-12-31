import express from 'express';
import * as signUpController from '../controller/signUpController.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router
.get('/', signUpController.signUp)

.post('/', signUpController.signJoin)

export default router;