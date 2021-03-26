import { Nft } from './types'

// mainnet
// export const NftFarm = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
// export const NFT = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

// testnet
export const NftFarm = '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE'
export const NFT = '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244'
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
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
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
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
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
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
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
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
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
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
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
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
  },
]

export default Nfts
