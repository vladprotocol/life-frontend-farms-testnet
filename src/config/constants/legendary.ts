import { Nft } from './types'

export const NftFarm = '0x6eF08433EA4885177c83fB9698D8B6F9277BeC5c'
export const NFT = '0xA81Ab2D03b9E3a62BDBb837d417A5E221F754E14'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'Legendary',
    metadata: 'tier-NFT-base-dark-chocolate.json',
    description: 'Dipped in chocolate and ready for a bite. Part of the base tier of Vlad NFTs.',
    previewImage: 'preview-base-dark-chocolate.jpg',
    originalImage:
      'https://ipfs.io/ipfs/QmX9UuF41nfhnESX3DnVHhC4XwuYAcLEReGyN4CtE8P7Bg?filename=NFT-base-dark-chocolate.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 0,
    nftId: 0,
    tokenAmount: 10,
    tokenSupply: 2222,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
]

export default Nfts
