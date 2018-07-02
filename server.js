const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const { config } = require('dotenv');
const { JWT } = require('google-auth-library');

config();

const { API_KEY, CLIENT_EMAIL, PRIVATE_KEY } = process.env;
const PORT = process.env.PORT || 8080;

const client = new JWT(CLIENT_EMAIL, null, PRIVATE_KEY, [
  'https://www.googleapis.com/auth/devstorage.read_only',
]);

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static('dist'));

app.get('/spine-animations', async (req, res, next) => {
  try {
    await client.authorize();
    const { data } = await client.request({
      url:
        'https://www.googleapis.com/storage/v1/b/resounding-axe-193803.appspot.com/o?delimiter=%2F&prefix=spine%2Fanimations%2F&fields=prefixes',
    });
    res.json(data);
  } catch (e) {
    next(e);
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
