
const hre = require("hardhat");

async function main() {
  const initSupply = 1000000;
  const ZTHToken = await hre.ethers.getContractFactory("ZTHToken");
  const zthtoken = await ZTHToken.deploy(initSupply);

  await zthtoken.deployed();

  const  totalSupply = await zthtoken.totalSupply();

  console.log(
    `ZTHToken deployed to ${zthtoken.address} with an initSupply ${totalSupply}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
