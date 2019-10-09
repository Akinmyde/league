import express from 'express';
import { signupController } from '../controllers/user.contollers';
import { signupValidator } from '../validators/user.validators'

const router = express();

router.post('/signup', signupValidator);

export default router;
