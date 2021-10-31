const hre = require("hardhat")
const fs = require('fs')

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket")
  const nftMarket = await NFTMarket.deploy()
  await nftMarket.deployed()

  console.log("NFTMarket Contract deployed:", nftMarket.address)

  const NFT = await hre.ethers.getContractFactory("NFT")
  const nft = await NFT.deploy(nftMarket.address)
  await nft.deployed()

  console.log("NFT Contract deployed:", nft.address)

  let config = `export const NFTMarketAddr = "${nftMarket.address}"
export const NFTAddr = "${nft.address}"`

  let data = JSON.stringify(config)
  fs.writeFileSync('config/contracts.ts', JSON.parse(data))

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})