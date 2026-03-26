import { DefenceRouterCore } from "../core/router";

export class DefenceRouter {
  private core: DefenceRouterCore;

  constructor() {
    this.core = new DefenceRouterCore();
  }

  async findBestRoute(params: {
    tokenIn: string;
    tokenOut: string;
    amount: number;
  }) {
    return this.core.findBestRoute(
      params.tokenIn,
      params.tokenOut,
      params.amount
    );
  }
}
