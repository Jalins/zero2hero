
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');

require("@nomiclabs/hardhat-ethers");
task("get-counter", "Get the value of the counter")
  .setAction(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    const value = await counter.getCount();
    console.log("Counter value:", value.toString());
  });

task("increment-counter", "Increment the value of the counter")
  .setAction(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    await counter.increment();
    const value = await counter.getCount();
    console.log("Counter value:", value.toString());
  });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    bnb:{
      url: `https://bsc-testnet.nodereal.io/v1/${process.env.NODEREAL_API_KEY}`,
      accounts:[`${process.env.ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan:{
    apiKey:`${process.env.SCAN_API_KEY}`
  }
};
