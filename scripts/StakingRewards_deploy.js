const hre = require("hardhat");

async function main() {
  const StakingRewards = await hre.ethers.getContractFactory("StakingRewards");
  const stakingRewards = await StakingRewards.deploy("0xb4f403C049882746F702DC8fdce390B2c7CC7876","0x142Db08e360249dA84004cDf7fA1F5AF2A715341","0x49AAd06172E86EfE64d66B49Ca65b11513d74224");

  await stakingRewards.deployed();

  console.log(
    `StakingRewards deployed to ${stakingRewards.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
