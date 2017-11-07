const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'production') {
  app.send('<h1>Site is under construction</h1>')
}
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, (req, res) => {
  console.log('Server Started')
})