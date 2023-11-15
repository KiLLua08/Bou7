import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import authRoute from './routes/authRoute.js'

dotenv.config();

const port = process.env.PORT;
//console.log('Port:', port);

const mongodbUri = process.env.MDB;
//console.log('MongoDB URI:', mongodbUri);

async function connectToDatabase() {
  try {
    await mongoose.connect(mongodbUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

connectToDatabase();

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});

app.use('/api/user', userRoutes );
app.use('/api/auth', authRoute );
