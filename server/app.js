import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.set('port', 1050);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

const indexRouter = express.Router();
indexRouter.get('/', (req, res) => {
    res.send("Ryan Spoone's API");
});

import githubRoutes from './routes/github/index.js';
import linkedinRoutes from './routes/linkedin/index.js';

indexRouter.use('/github', githubRoutes);
indexRouter.use('/linkedin', linkedinRoutes);

app.use(process.env.SERVER_ROUTE, indexRouter);

export default app;
