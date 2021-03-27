import { Nft } from './types'

// mainnet
// export const NftFarm = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const NFT = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const NftFarm = '0x5Cd5b45AF20CfdB97026ED07EC289cFE0936C84c'
export const NFT = '0x33ead545b05c4B308E16aA60035d5b402fA8e54C'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'Count Pepes Chocula',
    metadata: 'tier-NFT-base-dark-chocolate.json',
    description: 'Dipped in chocolate and ready for a bite. Part of the base tier of Vlad NFTs.',
    previewImage: 'preview-base-dark-chocolate.jpg',
    originalImage:
      'https://ipfs.io/ipfs/QmX9UuF41nfhnESX3DnVHhC4XwuYAcLEReGyN4CtE8P7Bg?filename=NFT-base-dark-chocolate.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 1,
    nftId: 1,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'Vlad Pepes Drakul',
    metadata: 'tier-NFT-base-main-nopaint.json',
    description: 'The legend behind the meme in all his original glory. Part of the base tier of Vlad NFTs',
    previewImage: 'preview-base-main-nopaint.jpg',
    originalImage:
      'https://ipfs.io/ipfs/QmWckPrzbjvf8jqUpdQ7jKLzdaSBTyPSV6x6obSUHHipqc?filename=NFT-base-main-nopaint.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 2,
    nftId: 2,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'Pepes in Stone',
    metadata: 'tier-NFT-base-marble.json',
    description:
      'The count has turned into a marble statue ready for display in the halls of Vladhalla. Part of the base tier of Vlad NFTs.',
    previewImage: 'preview-base-marble.jpg',
    originalImage: 'https://ipfs.io/ipfs/QmSnz85drLjCD4qNgaMwHFC6PFEkGrmYhM1LpHwZWpEWaQ?filename=NFT-base-marble.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 3,
    nftId: 3,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
]

export default Nfts
