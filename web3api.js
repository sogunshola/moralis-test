const Web3Api = require("moralis/web3api");
// import Web3Api from "moralis/web3api";
// const Moralis = require("moralis/node");

Web3Api.default.initialize({
  apiKey: "NkujuL4hWTRJrcjPxLQRunGEk6yNhylbA8VkUREwneMUQpkOPf7CEkT0m5ccjIiB",
});
// Moralis.start({
//   // appId: "MUb0iLJ2oqu4xBZEbwnXWVNIJMuKYcy5pMdx1ERK",
//   // serverUrl: "https://y504qcjlqxz4.grandmoralis.com:2053/server",
//   moralisSecret:
//     "XXXX-XXXX-XXXX-XXXX-XX-XXXX",
// });
console.log(
  "test",

  Web3Api.default.account
    .getTokenBalances({
      chain: "polygon",
      address: "0xE78dC206875373B351EEF2D182025bb9a64d67B3",
    })
    .then(console.log)

  // Web3Api.native
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
  //   .then(console.log)
  // Moralis.authenticate()
);
