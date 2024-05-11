const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    // const collection = await loadPostsCollection();
    // const posts = await collection.find().sort({ createdAt: 1 }).toArray();
    res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        image: req.body.image,
        record: req.body.record,
        createdAt: new Date()
    });
    res.status(201).send();
});

router.put('/test', async (req, res) => {
    res.send('PUT request to the test route is working');
});

router.put('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.updateOne(
        { _id: new mongodb.ObjectId(req.params.id) },
        { $set: req.body }
    );
    res.status(200).send();
});

router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://shawn:bladex1980@cluster0.ylrym.mongodb.net/cluster0?', {
    });

    return client.db('cluster0').collection('posts');

}

module.exports = router;