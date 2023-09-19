import express from 'express';
import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();
// Initialize express
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.HOST_PORT, () => console.log(`Example app listening on port ${port}!`));
