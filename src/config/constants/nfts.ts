import { Nft } from './types'

// mainnet
// export const NftFarm = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const NFT = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const NftFarm = '0xDb2eb954E24c26868d9fD8954A052FF61af4C26c'
export const NFT = '0x8106a9a743Faf36d0DD568B4b8E434C10735b911'
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
    nftFarmContract: '0x8CD0Fc72eB4Cc5952c89C1c38d0217432E65eD81',
    nftContract: '0xaae3989E43e3Cde428415154ceb79A83ec3A59ea',
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
    nftFarmContract: '0x8CD0Fc72eB4Cc5952c89C1c38d0217432E65eD81',
    nftContract: '0xaae3989E43e3Cde428415154ceb79A83ec3A59ea',
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
    nftFarmContract: '0x8CD0Fc72eB4Cc5952c89C1c38d0217432E65eD81',
    nftContract: '0xaae3989E43e3Cde428415154ceb79A83ec3A59ea',
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
    nftFarmContract: '0x8CD0Fc72eB4Cc5952c89C1c38d0217432E65eD81',
    nftContract: '0xaae3989E43e3Cde428415154ceb79A83ec3A59ea',
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
    nftFarmContract: '0x8CD0Fc72eB4Cc5952c89C1c38d0217432E65eD81',
    nftContract: '0xaae3989E43e3Cde428415154ceb79A83ec3A59ea',
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
    nftFarmContract: '0x8CD0Fc72eB4Cc5952c89C1c38d0217432E65eD81',
    nftContract: '0xaae3989E43e3Cde428415154ceb79A83ec3A59ea',
  },
]

export default Nfts
