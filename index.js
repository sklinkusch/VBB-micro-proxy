require("isomorphic-fetch");
require("now-env");
const express = require("express");
const app = express();

// const createClient = require("hafas-client");
// const vbbProfile = require("hafas-client/p/vbb");
// const client = createClient(vbbProfile, "vbbMicro");
const createHafas = require("vbb-hafas");
const hafas = createHafas("my-awesome-program");
const { filterProducts, lineFilter } = require("./dataFilter");

// specify port for development
const port = 3500;

app.use("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    next();
});

app.get("/", (req, res) => {
  const {
    station,
    duration = 60,
    mode = "dep",
    language = "de",
    date = null,
    direction = null,
    line = "",
    results = null,
    products = "1111111"
  } = req.query;
  const options = {
    duration: duration,
    remarks: true,
    language: language,
    when: date ? date : new Date(),
    direction: direction,
    results: results
  };
  if (mode === "dep") {
    hafas
    .departures(station, options)
    .then((data) => filterProducts(data))
    .then((data) => lineFilter(data))
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error))
  } else {
    hafas
    .arrivals(station, options)
    .then((data) => filterProducts(data))
    .then((data) => lineFilter(data))
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error))
  }
});

app.all('*', (req, res) => {
  return res.status(404).json({ error: { message: 'This endpoint does not exist.' }});
});

// listening (for development)
app.listen(port, () => {`Listening to requests on port ${port} ...`});
