const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World test!')
// });

// Configuring body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.post('/store', (req, res) => {
  // We will be coding here
  const data = req.body;

  console.log(data);

  res.send('Info catched');

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});