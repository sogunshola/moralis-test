// const Moralis = require("moralis/node");
import Moralis from "moralis/node.js";
// const fs = require("fs");
import fs from "fs";

let t;

async function init() {
  await Moralis.start({
    appId: "h8eMHV1FeXu1GTYO5HpbUbVQo61scSv85NjQbxmn",
    serverUrl: "https://ilhf3uqfiwbv.usemoralis.com:2053/server",
  });

  console.log(Moralis.CoreManager.get("VERSION"));

  // write start time
  fs.writeFileSync("./log_start.txt", `Start time: ${+new Date()}\n`);

  t = +new Date();
  let i;
  for (i = 0; i < 30000; i++) {
    try {
      await Moralis.Web3API.info.web3ApiVersion();
    } catch (error) {
      console.log(error);
      //await sleep(200);
    }

    if (i !== 0 && i % 100 === 0) {
      // Log time required to run 100 requests
      fs.appendFileSync(
        "./log3.txt",
        `Time required for 100 requests: ${+new Date() - t}\n`
      );
      t = +new Date();
    }

    process.stdout.write(`Iteration number: ${i}`);
    process.stdout.cursorTo(0);
  }

  // write start time
  fs.appendFileSync("./log_start.txt", `End time: ${+new Date()}`);
}

init();
