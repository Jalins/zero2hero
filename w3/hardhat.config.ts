import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    bnb:{
      url: "https://bsc-testnet.nodereal.io/v1/${process.env.NODEREAL_API_KEY}",
      accounts:[`${process.env.ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan:{
    apiKey:`${process.env.SCAN_API_KEY}`
  }
};

export default config;
