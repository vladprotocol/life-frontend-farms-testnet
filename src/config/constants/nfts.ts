import { Nft } from './types'

// mainnet
// export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const RABBIT_MINTING_FARM_ADDRESS = '0x618752b56a667486f407d5aE4d2171622e6D2c1B' // VladMintingFarm
export const PANCAKE_RABBITS_ADDRESS = '0x7CCCF5b0EBe07317F726F880BBB2a64619816836' // VladCoffin

const Nfts: Nft[] = [
  {
    name: 'test',
    description: 'test 1',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
    previewImage: 'swapsies-preview.png',
    blurImage: 'swapsies-blur.png',
    sortOrder: 0,
    bunnyId: 0,
  },
]

export default Nfts
