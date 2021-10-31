//const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", function () {
  it("Should publish items for sale", async function () {

    const Market = await ethers.getContractFactory("NFTMarket")
    const marketplace = await Market.deploy()
    await marketplace.deployed()

    const marketplaceAddr = marketplace.address


    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketplaceAddr)
    await nft.deployed()

    const nftContractAddr = nft.address

    let listingPrice = await marketplace.getListingPrice()


    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")
  
    await marketplace.createMarketItem(nftContractAddr, 1, auctionPrice, { value: listingPrice })
    await marketplace.createMarketItem(nftContractAddr, 2, auctionPrice, { value: listingPrice })
    
    const [_, buyerAddr] = await ethers.getSigners()

    await marketplace.connect(buyerAddr).createMarketSale(nftContractAddr, 1, { value: auctionPrice})

    items = await marketplace.getMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenURI = await nft.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenURI
      }

      return item
    }))

    console.log('items =>', items)
  })
});
