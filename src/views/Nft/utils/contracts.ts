import { AbiItem, fromWei } from 'web3-utils'
import { getContract } from 'utils/web3'
import { ContractOptions } from 'web3-eth-contract'
import nftFarm from 'config/abi/NftFarm.json'
import nft from 'config/abi/NFT.json'
import { NftFarm, NFT } from 'config/constants/nfts'

// TODO: Figure out how to add current account to contracts to write methods can be used

export const getNftMintingContract = (contractOptions?: ContractOptions) => {
  const nftMintingFarmAbi = (nftFarm as unknown) as AbiItem
  return getContract(nftMintingFarmAbi, NftFarm, contractOptions)
}

export const getNftContract = (contractOptions?: ContractOptions) => {
  const nftAbi = (nft as unknown) as AbiItem
  return getContract(nftAbi, NFT, contractOptions)
}

export const getFromWei = (v: any) => {
  if (!v) return 0
  return parseFloat(fromWei(v.toString(), 'ether'))
}

export default getNftMintingContract
