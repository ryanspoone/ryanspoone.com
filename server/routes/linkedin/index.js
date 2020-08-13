import _ from 'lodash';
import express from 'express';
const router = express.Router();

import { getPositions } from './helpers/index.js';

router.post('/', async (req, res) => {
    try {
        res.status(200).json(await getPositions(req.body));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await getPositions(req.params));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

export default router;
