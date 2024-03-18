import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb is connected')
}).catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3004, () => {
    console.log('Server is running on port 3004!');
})

app.use('/api/user', userRoutes)