export type Route = {
  path: string[];
  expectedOutput: number;
};

export class DefenceRouterCore {
  findBestRoute(tokenIn: string, tokenOut: string, amount: number): Route {
    // Dummy routing logic (bisa diganti dengan graph algorithm)
    const path = [tokenIn, "USDC", tokenOut];

    const expectedOutput = amount * 0.99; // simulasi fee & slippage

    return {
      path,
      expectedOutput
    };
  }
}
