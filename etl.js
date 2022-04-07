// const axios = require("axi`os");
import axios from "axios";

var time = new Date();

async function run() {
  let i = 0;
  for (i = 0; i < 10000; i++) {
    try {
      const reponse = await axios.get(
        "https://deep-index.moralis.io/api/v2/erc20/0xe9e7cea3dedca5984780bafc599bd69add087d56/price?chain=bsc",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key":
              "NkujuL4hWTRJrcjPxLQRunGEk6yNhylbA8VkUREwneMUQpkOPf7CEkT0m5ccjIiB",
          },
        }
      );
      // console.clear();
      console.log(i+1);
      if (i % 100 == 0) {
        const diff = new Date().getTime() - time.getTime();
        console.log(diff);
        time = new Date();
      }
      await sleep(200);
    } catch (error) {
      console.log("Error", error.message);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

run();
