import { Nft } from './types'

// mainnet
// export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const RABBIT_MINTING_FARM_ADDRESS = '0x618752b56a667486f407d5aE4d2171622e6D2c1B' // VladMintingFarm
export const PANCAKE_RABBITS_ADDRESS = '0x7CCCF5b0EBe07317F726F880BBB2a64619816836' // VladCoffin

const Nfts: Nft[] = [
  {
    name: 'test 2',
    description: 'test 2',
    originalImage: 'nft1.jpg',
    previewImage: 'nft1.jpg',
    blurImage: 'nft2.jpg',
    sortOrder: 0,
    bunnyId: 0,
  },
  {
    name: 'test 3',
    description: 'test 3',
    originalImage: 'nft2.mp4',
    previewImage: 'vlad1.gif',
    blurImage: 'vlad2.gif',
    sortOrder: 0,
    bunnyId: 0,
  },
]

export default Nfts
