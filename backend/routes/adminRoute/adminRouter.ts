import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import adminMiddleware from '../middleware/adminMiddleware';
// import multer from 'multer';
// import bodyParser from 'body-parser';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null,file.originalname);
//     }
//   })
  
//   const upload = multer({ storage: storage })

dotenv.config();
const prisma = new PrismaClient();
const adminRouter = express.Router();
adminRouter.use(express.json());
// adminRouter.use(bodyParser.urlencoded({ extended: true }));
// adminRouter.use(bodyParser.json());

adminRouter.post('/signup', async (req, res) => {
    const { name, email, password,key } = req.body;
    const secretKey = process.env.Admin_Secret;
    if(key !== secretKey) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    try {
        const user = await prisma.admin.create({
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

adminRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.admin.findUnique({
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

adminRouter.post('/add-batter',adminMiddleware,async(req,res)=>{
    const body = req.body;

    try{

        const batterData = {
            name: String(req.body.name),
            age: parseInt(req.body.age, 10),
            nationality: String(req.body.nationality),
            span: String(req.body.span),
            matches: parseInt(req.body.matches, 10),
            innings: parseInt(req.body.innings, 10),
            notouts: parseInt(req.body.notouts, 10),
            runs: parseInt(req.body.runs, 10),
            heighestscore: parseInt(req.body.heighestscore, 10),
            average: parseFloat(req.body.average),
            ballsfaced: parseInt(req.body.ballsfaced, 10),
            strikerate: parseFloat(req.body.strikerate),
            hundreds: parseInt(req.body.hundreds, 10),
            fifties: parseInt(req.body.fifties, 10),
            ducks: parseInt(req.body.ducks, 10),
            fours: parseInt(req.body.fours, 10),
            sixes: parseInt(req.body.sixes, 10),
            image: String(req.body.image),
        };

        const batter = await prisma.batter.create({
            data:batterData
        })
        res.status(201).json({ batter });
    }catch(error) {
        res.status(500).json({ error: error });
    }
})

adminRouter.post('/add-bowler',adminMiddleware,async(req,res)=>{
    const body = req.body;

    try{

        const bowlerData = {
            name: String(req.body.name),
            age: parseInt(req.body.age, 10),
            nationality: String(req.body.nationality),
            span: String(req.body.span),
            matches: parseInt(req.body.matches, 10),
            innings: parseInt(req.body.innings, 10),
            overs: parseInt(req.body.overs, 10),
            runs: parseInt(req.body.runs, 10),
            wickets: parseInt(req.body.wickets,10),
            average: parseFloat(req.body.average),
            balls: parseInt(req.body.balls, 10),
            strikerate: parseFloat(req.body.strikerate),
            economy: parseFloat(req.body.economy),
            bbi: String(req.body.bbi),
            fours: parseInt(req.body.fours, 10),
            fives: parseInt(req.body.fives, 10),
            image: String(req.body.image),
            madeins: parseInt(req.body.madeins, 10),
        };

        const bowler = await prisma.bowler.create({
            data:bowlerData
        })
        res.status(201).json({ bowler });
    }catch(error) {
        res.status(500).json({ error: error });
    }
})

adminRouter.post('/add-allrounder',adminMiddleware,async(req,res)=>{
    const body = req.body;

    try{

        const allrounderData = {
            name: String(req.body.name),
            age: parseInt(req.body.age, 10),
            image: String(req.body.image),
            nationality: String(req.body.nationality),
            span: String(req.body.span),
            matches: parseInt(req.body.matches, 10),
            innings: parseInt(req.body.innings, 10),
            balls: parseInt(req.body.balls, 10),
            overs: parseInt(req.body.overs, 10),
            madeins: parseInt(req.body.madeins, 10),
            runs: parseInt(req.body.runs, 10),
            wickets: parseInt(req.body.wickets, 10),
            bbi: String(req.body.bbi),
            average: parseFloat(req.body.average),
            strikerate: parseFloat(req.body.strikerate),
            economy: parseFloat(req.body.economy),
            fours: parseInt(req.body.fours, 10),
            fives: parseInt(req.body.fives, 10),
        };

        const allrounder = await prisma.allrounders.create({
            data:allrounderData
        })
        res.status(201).json({ allrounder });

    }catch(error) {
        res.status(500).json({ error: error });
    }

    });

export default adminRouter;