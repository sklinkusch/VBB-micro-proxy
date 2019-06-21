require("isomorphic-fetch");
require("now-env");

const createClient = require("hafas-client");
const vbbProfile = require("hafas-client/p/vbb");
const client = createClient(vbbProfile, "vbbMicro");

const { parse } = require("url");
const { send } = require("micro");

module.exports = async (req, res) => {
  const { query } = parse(req.url);
  // enable query to take two parameters
  const station = query.station;
  const duration = "duration" in query ? query.duration : 60;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  if (query) {
    client
      .departures(station, { duration: duration })
      .then(data => send(res, 200, data))
      .catch(error => send(res, 500, error));
  } else {
    send(res, 200, '{"result":"No departure provided"}');
  }
};

const parseQueryString = function(queryString) {
  const params = {};
  const queries = queryString.split("&");
  for (let i = 0; i < queries.length; i++) {
    const temp = queries[i].split("=");
    params[temp[0]] = temp[1];
  }
  return params;
};
