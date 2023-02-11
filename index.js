require("isomorphic-fetch");
require("now-env");

// const createClient = require("hafas-client");
// const vbbProfile = require("hafas-client/p/vbb");
// const client = createClient(vbbProfile, "vbbMicro");
const createHafas = require("vbb-hafas");
const hafas = createHafas("my-awesome-program");
const { filterProducts, lineFilter } = require("./dataFilter");

const { parse } = require("url");
const { send } = require("micro");

module.exports = async (req, res) => {
  const { query } = parse(req.url);
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
  } = parseQueryString(query);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const options = {
    duration: duration,
    remarks: true,
    language: language,
    when: date ? date : new Date(),
    direction: direction,
    results: results
  };
  if (query) {
    if (mode === "dep") {
      hafas
        .departures(station, options)
        .then((data) => filterProducts(data, products))
        .then((data) => lineFilter(data, line))
        .then((data) => send(res, 200, data))
        .catch((error) => send(res, 500, error));
      // client
      //   .departures(station, { duration: duration })
      //   .then(data => send(res, 200, data))
      //   .catch(error => send(res, 500, error));
    } else {
      hafas
        .arrivals(station, options)
        .then((data) => filterProducts(data, products))
        .then((data) => lineFilter(data, line))
        .then((data) => send(res, 200, data))
        .catch((error) => send(res, 500, error));
      // client
      //   .arrivals(station, { duration: duration })
      //   .then(data => send(res, 200, data))
      //   .catch(error => send(res, 500, error))
    }
  } else {
    send(res, 200, '{"result":"No departure provided"}');
  }
};

const parseQueryString = function (queryString) {
  const params = {};
  const queries = queryString.split("&");
  for (let i = 0; i < queries.length; i++) {
    const temp = queries[i].split("=");
    params[temp[0]] = temp[1];
  }
  return params;
};
