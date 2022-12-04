require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const projectId = process.env.INFURA_PROJECTID
const privateKey = process.env.SECRET_KEY

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 12345
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  }
};
