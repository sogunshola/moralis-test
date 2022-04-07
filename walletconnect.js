import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
console.log("log", WalletConnectProvider);
const provider = new WalletConnectProvider.default({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
});

//  Enable session (triggers QR Code modal)
await provider.enable();
