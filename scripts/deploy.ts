import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

  console.log("Deploying DefenceRouter...");

  // NOTE: biasanya pakai Hardhat/Foundry
  console.log("Contract deployed (mock)");
}

main();
