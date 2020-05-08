const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 9000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})