import { Nft } from './types'

// mainnet
// export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const RABBIT_MINTING_FARM_ADDRESS = '0x185a8F111953882d07C4B402572F7C046a5C3389'
export const PANCAKE_RABBITS_ADDRESS = '0xBfbcE0998dad07dc03A2Ee14255a94a52cf91ac0'

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
