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
    name: 'Dark chocolate',
    metadata: 'tier-NFT-base-dark-chocolate.json',
    description: 'test description',
    previewImage: 'preview-base-dark-chocolate.jpg',
    originalImage: '',
    blurImage: '',
    sortOrder: 1,
    nftId: 1,
    tokenAmount: 10,
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
  },
  {
    name: 'Main no paint',
    metadata: 'tier-NFT-base-main-nopaint.json',
    description: 'test description',
    previewImage: 'preview-base-main-nopaint.jpg',
    originalImage: '',
    blurImage: '',
    sortOrder: 2,
    nftId: 2,
    tokenAmount: 10,
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
  },
  {
    name: 'Marble',
    metadata: 'tier-NFT-base-marble.json',
    description: 'test description',
    previewImage: 'preview-base-marble.jpg',
    originalImage: '',
    blurImage: '',
    sortOrder: 3,
    nftId: 3,
    tokenAmount: 10,
    nftFarmContract: '0x81699Ec7E06C36d8f57A7548d3c3D5A579C759DE',
    nftContract: '0xea57bc27A8F3B8F56f50EeFA158f107C190Cb244',
  },
]

export default Nfts
