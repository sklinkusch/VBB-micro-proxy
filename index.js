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
  const queryArray = query.split(",");
  let station;
  let dura;
  if(queryArray.length === 2){
    [station, dura] = queryArray;
  } else {
    [station] = queryArray;
    dura = 60;
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  if (query) {
    client
      .departures(station, { duration: dura })
      .then(data => send(res, 200, data))
      .catch(error => send(res, 500, error));
  } else {
    send(res, 200, '{"result":"No departure provided"}');
  }
};
