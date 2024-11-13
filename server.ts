import dotenv from 'dotenv';
import express, { Express, Request, Response , Application } from 'express';
import cors from "cors";
// import corsOptions from './config/corsOptions';
import garageRouter from './routes/garage';
import { connectDB } from './config/dbConn'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(cors());

app.use('/garages', garageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
