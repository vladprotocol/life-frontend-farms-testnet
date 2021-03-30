import { Nft } from './types'

export const NftFarm = '0x9e04f069277ea2092E59575F7De698f5A1d62f62'
export const NFT = '0x8D5940Bd327714e2A116246020F7f3A3BCE8d471'
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
    sortOrder: 0,
    nftId: 0,
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
    sortOrder: 1,
    nftId: 1,
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
    sortOrder: 2,
    nftId: 2,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'Painted Pepe',
    metadata: '',
    description:
      'As an homage to the original Vlad Pepes Drakul this retains his painted face hang him in your gallery for eternal viewing.',
    previewImage: 'preview-painted-pepes.jpg',
    originalImage: 'https://ipfs.io/ipfs/QmRqe92vpppkNS2aihmdvswHstAiHAF4jC2KUAiec5LKKk?filename=NFT-painted-pepes.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 3,
    nftId: 3,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'The path to Vladhalla',
    metadata: '',
    description: 'All who seek to find the path to Vladhalla must have strong hands along the way to immortality.',
    previewImage: 'preview-path-to-vladhalla.jpeg',
    originalImage:
      'https://ipfs.io/ipfs/QmQWAeV3aAWD2Kbvxmtt4H874AEf7M7N5FcBos4iZbkRcj?filename=NFT-rare-path-to-vladhalla.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 4,
    nftId: 4,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'All Hail VLAD',
    metadata: '',
    description: 'A coin like no other. It grants the holder eternal life when stored in thier wallet.',
    previewImage: 'preview-all-hail-vlad.jpeg',
    originalImage:
      'https://ipfs.io/ipfs/QmWmdegkuvXShBs47G4GPqxfwnVbtKY5pYeAoAN3Xy37KV?filename=NFT-rare-all-hail-vlad.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 5,
    nftId: 5,
    tokenAmount: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
]

export default Nfts
