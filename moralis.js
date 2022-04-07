// const Moralis = require("moralis/node.js");
import Moralis from "moralis/node.js";

async function start() {
  await Moralis.start({
    // appId: "MUb0iLJ2oqu4xBZEbwnXWVNIJMuKYcy5pMdx1ERK",
    // serverUrl: "https://y504qcjlqxz4.grandmoralis.com:2053/server",
    moralisSecret:
      "XXXXXX-XXXX--XXXXX-X-XXXXXX-XXX-XXXX",
    // masterKey: "4kABwDGdAvsWzyTNZnkB9NKnZahvTcvE3NVZ5xWO"
  });
  // await Moralis.authenticate();
  const provider = await Moralis.enableWeb3({
    chainId: 137,
    privateKey:
      "your-private-key",
  });
  // console.log("RESULT", provider);
  // Moralis.Web3API.native
  //   .getBlock({
  //     chain: "bsc",
  //     block_number_or_hash: "2",
  //   })
  //   .then(console.log);
}

async function handleTriggers() {
  const trigger = await Moralis.handleTriggers(
    [
      {
        name: "web3Sign",
        message:
          "0x10f91b194f18da637487a0dc6532a09ecb91d4690838d3fad49fa8116447586e",
        signer: "0x992eccc191d6f74e8be187ed6b6ac196b08314f7",
        shouldAwait: true,
        saveResponse: true,
      },
      {
        name: "callPluginEndpoint",
        pluginName: "opensea",
        endpoint: "postOrder",
        params: {
          message:
            "0x10f91b194f18da637487a0dc6532a09ecb91d4690838d3fad49fa8116447586e",
          orderSide: 0,
        },
        useSavedResponse: true,
        savedResponseAs: "signature",
        savedResponseAt: [],
        shouldAwait: true,
        runResponseTrigger: true,
      },
    ],
    {
      exchange: "0xdd54d660178b28f6033a953b0e55073cfa7e3744",
      maker: "0x992eccc191d6f74e8be187ed6b6ac196b08314f7",
      taker: "0x0000000000000000000000000000000000000000",
      quantity: "1",
      makerRelayerFee: "0",
      takerRelayerFee: "250",
      makerProtocolFee: "0",
      takerProtocolFee: "0",
      makerReferrerFee: "0",
      waitingForBestCounterOrder: "false",
      feeMethod: "1",
      feeRecipient: "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
      side: 0,
      saleKind: "0",
      target: "0x0e9076fbeb063ead63b9eeb84b41694a8bbf8ddb",
      howToCall: "0",
      calldata:
        "0x23b872dd0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000992eccc191d6f74e8be187ed6b6ac196b08314f7000000000000000000000000000000000000000000000000000000000000000c",
      replacementPattern:
        "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      staticTarget: "0x0000000000000000000000000000000000000000",
      staticExtradata: "0x",
      paymentToken: "0xc778417e063141139fce010982780140aa0cd5ab",
      basePrice: "100000000000000",
      extra: "0",
      listingTime: "1647419352",
      expirationTime: 1647777902,
      salt: "70668313890520161953045995461395525059257279859611655540882290078909509742703",
      metadata: {
        asset: {
          id: "12",
          address: "0x0e9076fbeb063ead63b9eeb84b41694a8bbf8ddb",
        },
        schema: "ERC721",
        referrerAddress: "0x9BE4f78a7C2FdCB0D0e1D1fCC78D663e9bbDfE26",
      },
      v: 28,
      r: "0xce1042a1873f6ff13343f92de79833745fb84acd5b4d9e9dac4d6ca8add99ebc",
      s: "0x0231649702d327a9d4b31b72e211760ebea763e9e15c520d90fa1905c5eda43f",
      hash: "0x84cd95b200f3f027e25a8a69bd118ccfc2e14f8ee863f2863c055ef306f98286",
      nonce: 0,
    }
  );
  console.log(trigger);
}

async function transfer() {
  const options = {
    type: "native",
    amount: Moralis.Units.ETH("0.0000001"),
    receiver: "0x992eCcC191D6F74E8Be187ed6B6AC196b08314f7",
    // contractAddress: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  };
  let result = await Moralis.transfer(options);
  console.log("RESULT", result);
}

async function executeFunction() {
  const options = {
    contractAddress: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    functionName: "transfer",
    abi: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_spender",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_from",
            type: "address",
          },
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
          {
            name: "",
            type: "uint8",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
          {
            name: "_spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
    ],
    chain: "rinkeby",
    params: {
      _to: "0x992eCcC191D6F74E8Be187ed6B6AC196b08314f7",
      _value: 1000,
    },
  };
  let result = await Moralis.executeFunction(options);
  console.log("RESULT", result);
  let finalResult = await result.wait();
  console.log("finalResult", finalResult);
}

async function enable() {
  // await Moralis.start({
  //   // appId: "MUb0iLJ2oqu4xBZEbwnXWVNIJMuKYcy5pMdx1ERK",
  //   // serverUrl: "https://y504qcjlqxz4.grandmoralis.com:2053/server",
  //   moralisSecret:
  //     "XX-XXXXXXX-XXXX-XXXXX-XXX",
  // });
  // console.log(Buffer.from(fromPrivateKey, "hex"));
  // let user = Moralis.User.current();
  // if (!user) {
  // user = await Moralis.authenticate();
  // }
  // console.log("logged in user:", provider);
  // let result = await Moralis.Web3API.account.getNativeBalance({
  //   address: "0x60C17054aE68A7f2B2558480e44E2E69B9F73581",
  //   chain: "ropsten",
  // });
  const options = {
    type: "native",
    amount: Moralis.Units.ETH("0.012"),
    receiver: "0x992eCcC191D6F74E8Be187ed6B6AC196b08314f7",
  };
  let result = await Moralis.transfer(options);
  console.log("RESULT", result);
  // console.log(Moralis.serverURL);
  // console.log(Moralis.masterKey);
  // const results = await new Moralis.Query(Moralis.Role).find();
  // console.log(results);
  // results.map((v) => v.toJSON());
  // await Moralis.enableWeb3({
  //   chainId: 1,
  // });
  // Moralis.Web3API.native
  //   .runContractFunction({
  //     address: "0xecc7f044aa1ce2ad9d2453b01b8732a051213ecf",
  //     function_name: "totalSupply",
  //     chain: "rinkeby",
  //     abi: [
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "name",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           {
  //             name: "_spender",
  //             type: "address",
  //           },
  //           {
  //             name: "_value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "approve",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           {
  //             name: "_from",
  //             type: "address",
  //           },
  //           {
  //             name: "_to",
  //             type: "address",
  //           },
  //           {
  //             name: "_value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transferFrom",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint8",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //           },
  //         ],
  //         name: "balanceOf",
  //         outputs: [
  //           {
  //             name: "balance",
  //             type: "uint256",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           {
  //             name: "_to",
  //             type: "address",
  //           },
  //           {
  //             name: "_value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transfer",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //           },
  //           {
  //             name: "_spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "allowance",
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         payable: true,
  //         stateMutability: "payable",
  //         type: "fallback",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //     ],
  //   })
  //   .then(console.log);
}
await start();
// enable();
// await executeFunction();
await transfer();
// await handleTriggers();
