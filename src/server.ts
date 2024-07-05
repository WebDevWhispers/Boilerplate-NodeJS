import './loadEnvironment.js';
import express from 'express';
import configViewEngine from './web/config/configViewEngine.js';

// Initialize express
const app = express();
const port = process.env.PORT ?? '3000';
// Configure view engine for EJS
configViewEngine(app);

app.get('/ping', (req, res) => res.send('pong'));

app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
