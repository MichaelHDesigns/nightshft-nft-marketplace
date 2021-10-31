import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import axios from 'axios'

// types
import {
    CREATE_SALE_SUCCESS,
    LOAD_ITEMS_SUCCESS,
    SET_LOADING_STATE,
    SET_ERROR_MESSAGE,
    SET_SOLD_ITEMS,
    SET_MARKET_ITEMS,
    SET_CONNECTION_INSTANCE
} from 'redux/market/types'

// config
import { NFTMarketAddr, NFTAddr, ipfsClient } from 'config'

// contracts
import NFT from "artifacts/contracts/NFT.sol/NFT.json"
import Market from "artifacts/contracts/NFTMarket.sol/NFTMarket.json"

/**
 * Set Web3Provider connection instance
 * @param connection
 * @returns 
 */
export const setConnection = (connection) => async (dispatch) => dispatch({ type: SET_CONNECTION_INSTANCE, payload: connection })


/**
 * BUY NFT given Item
 * @param nft 
 * @returns 
 */
export const buyNft = (item) => async (dispatch, getState) => {
  const { market } = getState()
  // const web3Modal = new Web3Modal()
  // const connection = await web3Modal.connect()
  // const provider = new ethers.providers.Web3Provider(connection)
  const provider = new ethers.providers.JsonRpcProvider(market.connection.instance)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(NFTMarketAddr, Market.abi, signer)

  const price = ethers.utils.parseUnits(item.price.toString(), 'ether')
  const transaction = await contract.createMarketSale(NFTAddr, item.tokenId, {
    value: price
  })
  await transaction.wait()
  // loadMarketItems() TODO: loadMarketItems ?
}


/**
 * Uploads image to IPFS then calls createSale func
 * @param artworkData 
 * @returns 
 */
export const publishArtwork = (artworkData: any, cb: Function) => async (dispatch, getState) => {
    dispatch({ type: SET_LOADING_STATE, payload: true })

    const { name, description, price, image } = artworkData
    if (
        !name ||
        !description ||
        !price ||
        !image
    ) return

    const data = JSON.stringify({
      name,
      description,
      image
    })

    try {
      const added = await ipfsClient.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`

      try {
        const { market } = getState()
        let connection = market.instance

        if (!connection) {
          const web3Modal = new Web3Modal()
          connection = await web3Modal.connect()
        }

        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        
        let contract = new ethers.Contract(NFTAddr, NFT.abi, signer)
        let transaction = await contract.createToken(url)
        let tx = await transaction.wait()
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()

        const price = ethers.utils.parseUnits(
            artworkData.price,
            'ether'
        )
      
        contract = new ethers.Contract(NFTMarketAddr, Market.abi, signer)
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()

        transaction = await contract.createMarketItem(NFTAddr, tokenId, price, { value: listingPrice })
        await transaction.wait()
        dispatch({ type: SET_LOADING_STATE, payload: false })
        dispatch({ type: CREATE_SALE_SUCCESS, payload: true })
        cb()
      } catch(err) {
        throw err
      }
    } catch (error) {
        console.error('Something went wrong in createMarket action:', error)
        dispatch({
            type: SET_ERROR_MESSAGE,
            payload: error
        })
    }  
}


/**
 * Loads all items in the market
 * @returns 
 */
 export const loadMarketItems = () => async (dispatch) => {
   // show loader
  dispatch({ type: SET_LOADING_STATE, payload: true })
  dispatch({ type: LOAD_ITEMS_SUCCESS, payload: false })

  try {
    const provider = new ethers.providers.JsonRpcProvider() // gives Err => https://rpc-mainnet.maticvigil.com
    const tokenContract = new ethers.Contract(NFTAddr, NFT.abi, provider)
    const marketContract = new ethers.Contract(NFTMarketAddr, Market.abi, provider)
    const data = await marketContract.getMarketItems()
    
    const marketItems = await Promise.all(data.map(async i => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        const meta: any = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }
        return item
    }))

    // show success
    dispatch({ type: SET_MARKET_ITEMS, payload: marketItems })
    dispatch({ type: SET_LOADING_STATE, payload: false })
    dispatch({ type: LOAD_ITEMS_SUCCESS, payload: true })
  } catch(err) {
    // show error
    dispatch({ type: SET_LOADING_STATE, payload: false })
    dispatch({ type: LOAD_ITEMS_SUCCESS, payload: false })
  }

}