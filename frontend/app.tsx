import { DefenceRouter } from "../sdk";

async function main() {
  const router = new DefenceRouter();

  const route = await router.findBestRoute({
    tokenIn: "ETH",
    tokenOut: "DAI",
    amount: 1
  });

  console.log("Best Route:");
  console.log(route);
}

main();
