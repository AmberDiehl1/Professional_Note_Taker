const { readFromFile, readAndAppend } = require('../helpers/fsutils');
const routers = require('express').Router();


routers.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
routers.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  const payload = {
    title,
    text ,
    
  };

  
    readAndAppend(payload, './db/db.json');
    res.json(`note added & information added 🔧`);
  }
);

module.exports = routers