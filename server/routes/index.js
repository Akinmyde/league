import express from 'express';
import userRoute from './user.routes';
import notFoundRoute from './notFound.routes';

const router = express();

router.use(userRoute);
router.use(notFoundRoute);

export default router;
