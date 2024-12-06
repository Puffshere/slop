const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

let postsCollection; // Declare a variable to store the MongoDB collection reference

async function connectToDB() {
    if (!postsCollection) {
        // Connect to MongoDB only if postsCollection is not already set
        const client = await mongodb.MongoClient.connect(
            'mongodb+srv://shawn:bladex1980@cluster0.ylrym.mongodb.net/cluster0?',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        postsCollection = client.db('cluster0').collection('posts');
    }
    return postsCollection;
}

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await connectToDB();
        const allPosts = await posts.find({}).toArray();
        res.status(200).send(allPosts);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching posts', error });
    }
});

// POST a new post
router.post('/', async (req, res) => {
    try {
        const posts = await connectToDB();
        await posts.insertOne({
            text: req.body.text,
            image: req.body.image,
            record: req.body.record,
            createdAt: new Date()
        });
        res.status(201).send();
    } catch (error) {
        res.status(500).send({ message: 'Error adding post', error });
    }
});

// PUT request test route
router.put('/test', async (req, res) => {
    res.send('PUT request to the test route is working');
});

// Update a post by ID
router.put('/:id', async (req, res) => {
    try {
        const posts = await connectToDB();
        await posts.updateOne(
            { _id: new mongodb.ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.status(200).send();
    } catch (error) {
        res.status(500).send({ message: 'Error updating post', error });
    }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
    try {
        const posts = await connectToDB();
        await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
        res.status(200).send();
    } catch (error) {
        res.status(500).send({ message: 'Error deleting post', error });
    }
});

module.exports = router;
