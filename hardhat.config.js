require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-bscscan");


NODEREAL_API_KEY="c597ab8d67c44f2193051fdbec70ae03"
ACCOUNT_PRIVATE_KEY="0x5b8fa7f28d34892734e872f88add5454c1fac765e31a5c846decc08f8f53dab5"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    BSC: {
      url: `https://bsc-testnet.nodereal.io/v1/${NODEREAL_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
    
  },
  etherscan: {
    apiKey: {
      BSC: 'TBT4W1RWW625DEHWQURNGJNZUE4AZAP8MQ'
    }
  }
};
