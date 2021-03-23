import { Nft } from './types'

// mainnet
// export const NftFarm = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const NFT = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const NftFarm = '0x6aE5F0270BFA745EcB172d7Dce90D5A75984A3B3'
export const NFT = '0xc58d8BA9f404443bFAfEC4a5a5b4d70435D77F92'
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
]

export default Nfts
