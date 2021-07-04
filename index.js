const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const client = new mongodb.MongoClient('mongodb://localhost:27017/robots', { useUnifiedTopology: true });
client.connect();
const collection = client.db('robots').collection('robots');

// To serve static files
app.use('/', express.static('website'));

// To get motor data
app.get('/motor', async (req, res) => {
  const result = await collection.findOne({ _id: 'robot1' });
  res.json(result);
});

// To update motor data
app.post('/motor', (req, res) => {
  collection.findOneAndUpdate(
    { _id: 'robot1' },
    { $set: req.body },
    { upsert: true }
  );
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})