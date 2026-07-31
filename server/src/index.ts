import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api', apiRouter);

app.use(errorHandler);

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 GardenMe Backend server is running on http://localhost:${PORT}`);
});