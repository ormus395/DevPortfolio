const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// if(process.env.NODE_ENV === 'production') {
//   app.get('/*', (req, res) => {
//     res.send('<h1>Sight under construction</h1>')
//   })
// }
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'src')))

app.listen(port, (req, res) => {
  console.log('Server Started')
})