import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// GET waitlist count
app.get('/api/waitlist/count', async (req, res) => {
    try {
        const count = await prisma.waitlist.count();
        res.json({ count });
    } catch (error) {
        console.error('Error fetching count:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST join waitlist
app.post('/api/waitlist', async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
        const entry = await prisma.waitlist.upsert({
            where: { email },
            update: {},
            create: { email },
        });
        res.json({ success: true, entry });
    } catch (error) {
        console.error('Error joining waitlist:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
