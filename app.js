const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on 127.0.0.1:${port}`));
