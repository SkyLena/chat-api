import { AuthController } from './auth.controller';
import express from 'express';
import { ROUTES } from '../config';

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post(ROUTES.Auth.signIn, authController.signIn);
authRouter.post(ROUTES.Auth.signUp, authController.signUp);

export { authRouter };
