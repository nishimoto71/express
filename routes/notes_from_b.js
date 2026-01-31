var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());

router.get('/', async (req, res) => {
  try {
    // 🔑 ここが重要
    if (!client.topology || !client.topology.isConnected()) {
      await client.connect();
    }

    const database = client.db('notes');
    const notes = database.collection('notes');

    const note = await notes.find({}).toArray();
    res.json(note);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;
