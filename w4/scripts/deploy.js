
const {ethers, upgrades} = require("hardhat");
async function main() {
  //=========================== 部署代理合约 =================================
  // const Counter = await ethers.getContractFactory("Counter");
  // const counter = await upgrades.deployProxy(Counter,[1]);

  // await counter.deployed();

  // console.log(
  //   `Counter deployed to ${counter.address}`
  // );

  // ================================ 升级代理合约 ===========================
   const CounterUpgrade = await ethers.getContractFactory("CounterUpgrade");
   const counterUpgrade = await upgrades.upgradeProxy("0xE22661ac5ae352006aB8419201AA7020538CB41A",CounterUpgrade);
 
   await counterUpgrade.deployed();
 
   console.log(
     `CounterUpgrade deployed to ${counterUpgrade.address}`
   );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
