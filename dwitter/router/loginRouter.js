import express from 'express';
import * as loginController from '../controller/loginController.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router
.post('/', loginController.login);

export default router;