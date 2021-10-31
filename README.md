# nightshft nft marketplace 

Previously known as the Matic Network, Polygon is an interoperability layer two scaling solution for building Ethereum-compatible blockchains. The blockchain uses the Matic token for governance, staking and for gas fees via a proof of stake (PoS) consensus mechanism.

This project showcases a basic NFT marketplace web application where users can collect, and mint ERC721 implemented digital assets on the Polygon Network.


### Overview


##### For collectors

To start collecting all you’ll need is a MetaMask wallet and Polygon/Matic, the cryptocurrency used to pay for all transactions on the Polygon network which operates on Ethereum. When you buy and NFT, the artwork gets transferred to your wallet and appears on your collector profile.


##### For artists

To start selling your artwork, all you’ll need is to set up a MetaMask wallet with Polygon/Matic before you can publish an NFT—which means uploading your JPG, PNG, or video file to IPFS, a decentralized peer-to-peer storage network. It will then be an NFT you can price in Polygon/Matic and put up for sale on the platform.


### live demo
  
For a live demo, see //
  

### stack
  
* Solidity - Language for implementing smart contracts.
* Typescript - Programming language.
* Framer motion - Animations.
* Styled components - React library for writing CSS inside components.
* Nextjs - Fullstack Framework.
* IPFS - File storage for NFTs.
* Ethers - Ethereum Web Client Library.
* Polygon - Framework for building and connecting Ethereum-compatible blockchain networks.
* Hardhat - Ethereum development environment.


### features

* Buy Nightshft NFTs from the marketplace.
* Publish Nightshft NFTs for sale on the marketplace.
* Keep track of your favorite NFTs on a wishlist.



### setup

Ensure you have Npm(>=6.14.5) installed on your system and on your path.
Modify .env variables


##### install dependencies

```
npm install
```


##### Initialize a new hardhat environment

```
npx hardhat
```


##### Start network

```
npm run start:node
```


##### Deploy smart contracts

```
npm run deploy:contracts
```

 
##### Compile smart contracts

```
npx hardhat compile
```
  

##### Test contracts

```
npm run test:contracts
```


##### Test UI

```
npm run test
```


##### Development

```
npm i &&
npm run start:dev
```

  
##### Production


```
npm i &&
npm run build &&
npm run start
```