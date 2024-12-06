const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

let db; // Create a variable to hold the database connection

// Updated loadPostsCollection function with reusable connection logic
async function loadPostsCollection() {
  if (!db) {
    const client = await mongodb.MongoClient.connect('mongodb+srv://shawn:bladex1980@cluster0.ylrym.mongodb.net/cluster0?', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db('cluster0');
  }
  return db.collection('posts');
}

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    const allPosts = await posts.find({}).toArray();
    res.status(200).send(allPosts); // Return an array (even if empty)
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(503).send({ message: "Service Unavailable" });
  }
});

// Insert a new post
router.post('/', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    await posts.insertOne({
      text: req.body.text,
      image: req.body.image,
      record: req.body.record,
      createdAt: new Date()
    });
    res.status(201).send();
  } catch (error) {
    console.error("Error inserting post:", error);
    res.status(503).send({ message: "Service Unavailable" });
  }
});

// Test PUT route
router.put('/test', async (req, res) => {
  res.send('PUT request to the test route is working');
});

// Update a post by ID
router.put('/:id', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    await posts.updateOne(
      { _id: new mongodb.ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.status(200).send();
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(503).send({ message: "Service Unavailable" });
  }
});

// Delete a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.status(200).send();
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(503).send({ message: "Service Unavailable" });
  }
});

module.exports = router;
