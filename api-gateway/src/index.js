const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`[EDUDASH_API] Gateway listening on port ${process.env.PORT}`);
});
