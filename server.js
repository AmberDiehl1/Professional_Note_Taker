const express = require('express');
const htmlroute = require('./routes/htmlroutes');
const apiroute = require('./routes/apiroutes');

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiroute);
app.use('/', htmlroute);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
