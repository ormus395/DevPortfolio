const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'src')))

app.get('/*', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, (req, res) => {
  console.log('Server Started')
})