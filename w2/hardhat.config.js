require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-bscscan");


NODEREAL_API_KEY=""
ACCOUNT_PRIVATE_KEY=""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    BSC: {
      url: `https://bsc-testnet.nodereal.io/v1/${NODEREAL_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
    
  }
 
};
