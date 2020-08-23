import _ from 'lodash';
import express from 'express';
// @FIXME Reloading dotenv shouldn't be necessary...
import dotenv from 'dotenv';
dotenv.config();
import GhostContentAPI from '@tryghost/content-api';
const router = express.Router();

const BlogAPI = new GhostContentAPI({
    url: process.env.GHOST_BLOG_URL,
    key: process.env.GHOST_BLOG_KEY,
    version: 'v3'
});

const ALL_POSTS_DEFAULTS = {
    fields: ['slug', 'id', 'title', 'featured', 'published_at', 'feature_image', 'reading_time', 'excerpt'],
    limit: 'all',
    filter: 'visibility:public+featured:false'
};

const FEATURED_POSTS_DEFAULTS = {
    // @FIXME: For some reason, when filtering by fields, it won't return certain fields like reading
    // time and excerpt.
    // fields: ['slug', 'id', 'title', 'featured', 'published_at', 'feature_image', 'reading_time', 'excerpt'],
    limit: 'all',
    include: ['tags'],
    filter: 'visibility:public+featured:true'
};

const POST_DEFAULTS = {
    fields: ['slug', 'id', 'title', 'featured', 'published_at', 'feature_image', 'reading_time', 'html'],
    include: ['tags']
};

router.post('/', async (req, res) => {
    try {
        res.status(200).json(await BlogAPI.posts.browse({ ...ALL_POSTS_DEFAULTS, ...req.body }));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await BlogAPI.posts.browse({ ...ALL_POSTS_DEFAULTS, ...req.params }));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.post('/featured', async (req, res) => {
    try {
        res.status(200).json(await BlogAPI.posts.browse({ ...FEATURED_POSTS_DEFAULTS, ...req.body }));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/featured', async (req, res) => {
    try {
        res.status(200).json(await BlogAPI.posts.browse({ ...FEATURED_POSTS_DEFAULTS, ...req.params }));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.post('/post', async (req, res) => {
    try {
        res.status(200).json(await BlogAPI.posts.read(req.body, POST_DEFAULTS));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/post', async (req, res) => {
    try {
        res.status(200).json(await BlogAPI.posts.read(req.params, POST_DEFAULTS));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

export default router;
