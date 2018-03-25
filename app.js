const express = require('express');
const path = require('path');

const app = express();

const port = 3024;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
