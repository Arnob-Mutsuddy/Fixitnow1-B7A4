import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app: Application = express();

// Application Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };