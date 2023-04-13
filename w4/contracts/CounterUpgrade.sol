// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterUpgrade is Initializable{
    uint256 public count;
    uint256 constant CONSTANT_COUNT = 100;

    function initialize(uint256 num) public initializer{
        count = num;
    }

    function increment() public {
        count += 2;
    }

    function getCount() public view returns (uint256){
        return count;
    }
}
