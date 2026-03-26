// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DefenceRouter {
    struct Route {
        address[] path;
        uint256 amountOut;
    }

    event RouteExecuted(address user, uint256 amountIn, uint256 amountOut);

    function executeRoute(
        address[] calldata path,
        uint256 amountIn
    ) external returns (uint256 amountOut) {
        require(path.length >= 2, "Invalid path");

        // Simulasi routing logic
        amountOut = amountIn;

        for (uint i = 0; i < path.length - 1; i++) {
            amountOut = (amountOut * 997) / 1000; // 0.3% fee simulation
        }

        emit RouteExecuted(msg.sender, amountIn, amountOut);
        return amountOut;
    }
}
