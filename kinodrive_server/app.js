const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.json('works');
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
