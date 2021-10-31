import { create as ipfsHttpClient } from 'ipfs-http-client'

export const ipfsClient = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")

export const AppName: string = "Nightshft"
export const AppDesc: string = "Nightsht NFT Marketplace"
export const LogoPath: string = "/logo.ico"

// routes
export const exploreRoute: string = "/explore"
export const wishlistRoute: string = "/wishlist"
export const itemDetailsRoute: string = "/items"
export const rootRoute: string = "/"

export const getCurrentEthPrice = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"

export * from './themes'
export * from './device-breakpoints'
export * from './contracts'
export * from './animations'