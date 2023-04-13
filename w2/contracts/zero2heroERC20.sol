// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZTHToken is ERC20 {
    constructor (uint256 initSupply) ERC20("ZTHToken", "ZTH"){
        _mint(msg.sender, initSupply);
    }
}
