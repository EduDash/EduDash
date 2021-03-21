const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`[IDENTITY_SERVICE] Listening on port ${PORT}`);
});
