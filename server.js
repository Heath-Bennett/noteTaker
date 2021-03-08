
const path = require('path');
const fs = require('fs');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, ('public'))));


app.use('/', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
