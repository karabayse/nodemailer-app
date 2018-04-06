// Bring in dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

// Initialize application variables
const app = express();

// Create route
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3500, () => console.log('Server up on port 3500'));
