import _ from 'lodash';
import express from 'express';
const router = express.Router();

import { getData } from './helpers';

router.post('/', async (req, res) => {
    try {
        res.status(200).json(await getData(req.body));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await getData(req.params));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

export default router;
