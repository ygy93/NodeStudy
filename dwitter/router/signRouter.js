import express from 'express';
import * as signController from '../controller/signController.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router
.post('/', signController.signUp);

export default router;