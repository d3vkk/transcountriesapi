var countriesData = require('./countries.js');
countriesData = countriesData.data.country;

const Fuse = require("fuse.js");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.redirect('https://github.com/d3vkk/transcountriesapi');
})

app.get('/name', (req, res) => {
  const fuse = new Fuse(countriesData, {
    keys: ["name"],
  });

  const searchResults = fuse.search(req.query.name);
  if (searchResults != []) {
    res.json({
      found: true,
      message: 'Country found',
      country: searchResults[0].item
    });
  } else {
    res.json({
      found: false,
      message: 'Country NOT found',
      country: [],
    });
  }

})

app.get('/tel', (req, res) => {
  const fuse = new Fuse(countriesData, {
    keys: ["tel"],
  });

  const searchResults = fuse.search(req.query.tel);
  if (searchResults != []) {
    res.json({
      found: true,
      message: 'Country found',
      country: searchResults[0].item,
    });

  } else {
    res.json({
      found: false,
      message: 'Country NOT found',
      country: [],
    });
  }

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on 127.0.0.1:${port}`));
