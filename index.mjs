import express from "express";
import { createVbbHafas as createHafas } from "vbb-hafas";
import { stringify } from "flatted";
const app = express();

const hafas = createHafas("vbbMicro");
// const { filterProducts, lineFilter } = require("./dataFilter");

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
    date = null
    // direction = null,
    // line = "",
    // results = null
    // products = "1111111"
  } = req.query;
  const options = {
    duration: duration,
    remarks: true,
    language: language,
    when: date ? date : new Date()
    // direction: direction,
    // results: results
  };
  if (mode === "dep") {
    return (
      hafas
        .departures(station, options)
        // .then((data) => filterProducts(data, products))
        // .then((data) => lineFilter(data, line))
        .then((data) => {
          const jsonDep = stringify(data);
          return res.status(200).send(jsonDep);
        })
        .catch((error) => {
          const jsonDepError = stringify(error);
          return res.status(500).send(jsonDepError);
        })
    );
  } else {
    return (
      hafas
        .arrivals(station, options)
        // .then((data) => filterProducts(data))
        // .then((data) => lineFilter(data, line))
        .then((data) => {
          const jsonArr = stringify(data);
          return res.status(200).send(jsonArr);
        })
        .catch((error) => {
          return res.status(500).send(jsonArrError);
        })
    );
  }
});

app.all("*", (req, res) => {
  const jsonError = circularJSON.stringify({
    error: { message: "This endpoint does not exist." }
  });
  return res.status(404).send(jsonError);
});

// // listening (for development)
app.listen(port, () => {
  `Listening to requests on port ${port} ...`;
});
