import dotenv from 'dotenv';
import express from "express";
import router from './routes/router.js'

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () => { console.log(`Server listening on port ${port}`)} );