import express from 'express';
import userRouter from './userRoute/userRouter';
import adminRouter from './adminRoute/adminRouter';

const router = express();
router.use(express.json());
router.use(express.Router());

router.use('/user', userRouter);
router.use('/admin', adminRouter);

export default router;