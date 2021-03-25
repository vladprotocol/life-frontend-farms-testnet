import { Nft } from './types'

// mainnet
// export const NftFarm = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const NFT = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const NftFarm = '0xB63a03BDDBED669b795F001773391f1ecB4F3a63'
export const NFT = '0xC1648Ab65f0D6FE664F9C0c9a362DBAc36Ec1052'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'test 2',
    description: 'test 2',
    originalImage: 'nft1.jpg',
    previewImage: 'nft1.jpg',
    blurImage: 'nft2.jpg',
    sortOrder: 1,
    nftId: 1,
    tokenAmount: 10,
    nftFarmContract: '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c',
    nftContract: '0x8106a9a743Faf36d0DD568B4b8E434C10735b911',
  },
  {
    name: 'test 3',
    description: 'test 3',
    originalImage: 'nft2.mp4',
    previewImage: 'vlad2.gif',
    blurImage: 'vlad1.gif',
    sortOrder: 2,
    nftId: 2,
    tokenAmount: 10,
    nftFarmContract: '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c',
    nftContract: '0x8106a9a743Faf36d0DD568B4b8E434C10735b911',
  },
  {
    name: 'test 4',
    description: 'test 4',
    originalImage: 'nft2.mp4',
    previewImage: 'vlad2.gif',
    blurImage: 'vlad1.gif',
    sortOrder: 3,
    nftId: 3,
    tokenAmount: 10,
    nftFarmContract: '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c',
    nftContract: '0x8106a9a743Faf36d0DD568B4b8E434C10735b911',
  },
  {
    name: 'test test',
    description: 'test test',
    originalImage: 'nft2.mp4',
    previewImage: 'vlad2.gif',
    blurImage: 'vlad1.gif',
    sortOrder: 4,
    nftId: 4,
    tokenAmount: 10,
    nftFarmContract: '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c',
    nftContract: '0x8106a9a743Faf36d0DD568B4b8E434C10735b911',
  },
  {
    name: 'test 5',
    description: 'test 5',
    originalImage: 'nft2.mp4',
    previewImage: 'vlad2.gif',
    blurImage: 'vlad1.gif',
    sortOrder: 5,
    nftId: 5,
    tokenAmount: 10,
    nftFarmContract: '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c',
    nftContract: '0x8106a9a743Faf36d0DD568B4b8E434C10735b911',
  },
  {
    name: 'test 6',
    description: 'test 6',
    originalImage: 'nft2.mp4',
    previewImage: 'vlad2.gif',
    blurImage: 'vlad1.gif',
    sortOrder: 6,
    nftId: 6,
    tokenAmount: 10,
    nftFarmContract: '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c',
    nftContract: '0x8106a9a743Faf36d0DD568B4b8E434C10735b911',
  },
]

export default Nfts
