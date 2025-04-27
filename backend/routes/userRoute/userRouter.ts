import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userMiddleware from '../middleware/userMiddleware';
dotenv.config();
import path from 'path';
const prisma = new PrismaClient();

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.get('/', (req, res) => {
    res.send('Hello from user router!');
});

userRouter.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        if(!user) {
            res.status(400).json({ error: 'User creation failed' });
            return;
        }
        const JWT_SECRET = process.env.JWT_SECRET;
        if(!JWT_SECRET) {
            res.status(500).json({ error: 'JWT secret not set' });
            return;
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'User creation failed' });
    }
});

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user || user.password !== password) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const JWT_SECRET = process.env.JWT_SECRET;
        if(!JWT_SECRET) {
            res.status(500).json({ error: 'JWT secret not set' });
            return;
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

userRouter.get('/batter-data',userMiddleware,async(req,res)=>{
    const userId = req.body.userId;
    
    try{
        const batter = await prisma.batter.findFirst({
            where: { id: userId },
        });

        res.status(200).json({ batter });

    }catch (error) {
        res.status(500).json({ error: error });
    }
})


userRouter.get('/bowler-data',userMiddleware,async(req,res)=>{
    const userId = req.body.userId;
    
    try{
        const bowler = await prisma.bowler.findFirst({
            where: { id: userId },
        });
        

        res.status(200).json({ bowler });

    }catch (error) {
        res.status(500).json({ error: error });
    }
})

userRouter.get('/allrounder-data',userMiddleware,async(req,res)=>{
    const userId = req.body.userId;
    
    try{
        const allrounder = await prisma.allrounders.findFirst({
            where: { id: userId },
        });
        

        res.status(200).json({ allrounder });

    }catch (error) {
        res.status(500).json({ error: error });
    }
})

userRouter.get('/all-batters',userMiddleware,async(req,res)=>{
    try{
        const batters = await prisma.batter.findMany({});
        res.status(200).json({ batters });
    }catch (error) {
        res.status(500).json({ error: error });
    }
});

userRouter.get('/all-bowlers',userMiddleware,async(req,res)=>{
    try{
        const bowlers = await prisma.bowler.findMany({});
        res.status(200).json({ bowlers });
    }catch (error) {
        res.status(500).json({ error: error });
    }
});

userRouter.get('/all-allrounders',userMiddleware,async(req,res)=>{
    try{
        const allrounders = await prisma.allrounders.findMany({});
        res.status(200).json({ allrounders });
    }catch (error) {
        res.status(500).json({ error: error });
    }
});


export default userRouter;