const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Shill backend is running');
});

app.listen(3000, () => {
  console.log('Backend server running on port 3000');
});
