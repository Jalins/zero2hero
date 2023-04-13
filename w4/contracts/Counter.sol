// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Counter is Initializable{
    uint256 public count;
    uint256 constant CONSTANT_COUNT = 99;

    function initialize(uint256 num) public initializer{
        count = num;
    }

    function increment() public {
        count += 1;
    }

    function getCount() public view returns (uint256){
        return count;
    }
}
