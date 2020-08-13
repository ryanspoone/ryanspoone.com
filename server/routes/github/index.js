import _ from 'lodash';
import express from 'express';
const router = express.Router();

import { getFeatured, getRepoStats, getUserStats, getRepositories } from './helpers/index.js';

router.post('/', async (req, res) => {
    try {
        res.status(200).json(await getRepoStats(req.body));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await getRepoStats(req.params));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.post('/stats', async (req, res) => {
    try {
        res.status(200).json(await getUserStats(req.body));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/stats', async (req, res) => {
    try {
        res.status(200).json(await getUserStats(req.params));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.post('/featured', async (req, res) => {
    try {
        res.status(200).json(await getFeatured(req.body));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/featured', async (req, res) => {
    try {
        res.status(200).json(await getFeatured(req.params));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.post('/repositories', async (req, res) => {
    try {
        res.status(200).json(await getRepositories(req.body));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/repositories', async (req, res) => {
    try {
        res.status(200).json(await getRepositories(req.params));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

export default router;
