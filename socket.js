// const io = require("socket.io-client");
// const Web3 = require("web3");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;
const Moralis = require("moralis/node");
var ParseSwagger = require("parse-server-swagger");

app.use(bodyParser.json());
app.use(cors());

// import Web3 from "web3";

// const socket = io("https://thespottrapp.herokuapp.com");

// async function con() {
//   // await socket.connect();
//   // setTimeout(() => {
//   //   console.log(socket.connected);
//   // }, 5000);
//   console.log(
//     Web3.utils.sha3("2Mc9hpguSApTZZh3jiP9NkSgiqoqXv4unRbRFLFgMukeRMUj18")
//   );
// }
Moralis.initialize("qBhOuJ77S4VFUr7FlilPI6K9LsxUj1bFGM6FmZ7q");
Moralis.serverURL = "http://localhost:1337/server";
// if (CONFIG.swagger) {
var parseSwagger = new ParseSwagger({
  host: "http:localhost:1337",
  parsePath: "/server",
  appId: "qBhOuJ77S4VFUr7FlilPI6K9LsxUj1bFGM6FmZ7q",
  masterKey: "MxlXYi6O6hsDTFMBGtA21CtYsiG44JPCjJwMU6CN",
  openapi: "3.0.0",
});
app.use(parseSwagger);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// }
// console.log(parseSwagger);
