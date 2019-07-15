const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const axios = require('axios');

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

let baseUrl = "https://www.metaweather.com/api"
app.get('/location/:id', async (req, res) => {
  const { id } = req.params
  let response = await axios.get(`${baseUrl}/location/${id}`).catch(err => res.send(err));
  res.send(response.data);
});

app.get('/city', async (req, res) => {
  const { query } = req.query
  let response = await axios.get(`${baseUrl}/location/search/?query=${query}`).catch(err => res.send(err));
  res.send(response.data);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);