import React, { useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Heading,
  Tag,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
  Text,
  CardFooter,
  useModal,
} from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { Nft } from 'config/constants/types'
import { AMOUNT_TO_CLAIM } from 'config/constants/nfts'
import { useHistory } from 'react-router-dom'
import InfoRow from '../InfoRow'
import Image from '../Image'
import { NftProviderContext } from '../../contexts/NftProvider'
import { getNftContract } from '../../utils/contracts'
import ClaimNftModal from '../ClaimNftModal'
import BurnNftModal from '../BurnNftModal'
import TransferNftModal from '../TransferNftModal'

interface NftCardProps {
  nft: Nft
}

const Header = styled(InfoRow)`
  min-height: 28px;
`

const DetailsButton = styled(Button).attrs({ variant: 'text', fullWidth: true })`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`

const InfoBlock = styled.div`
  padding: 0 24px 24px;
`

const Value = styled(Text)`
  font-weight: 600;
`

const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const [state, setState] = useState({
    isLoading: false,
    isOpen: false,
    nftCount: 0,
    nftBurnCount: 0,
  })
  const TranslateString = useI18n()
  const {
    isInitialized,
    hasClaimed,
    ownerById,
    canBurnNft,
    totalSupplyDistributed,
    currentDistributedSupply,
    getTokenIds,
    reInitialize,
    allowMultipleClaims,
    rarity,
    priceMultiplier,
    maxMintPerNft,
    tokenPerBurn,
    amounts,
    maxMintByNft,
    prices,
  } = useContext(NftProviderContext)
  const { account } = useWallet()

  const history = useHistory()

  // maxMintPerNft limit max amount that a nft can be minted
  // maxMintByNft array containing individual amount of mint per nft index
  // prices array containing individual prices of a mint per nft index
  // tokenPerBurn global price

  const { nftId, name, previewImage, originalImage, description } = nft
  const PRICE = prices[nft.nftId] || tokenPerBurn // here we get the price

  const hasClaimedArr: any = hasClaimed[0]
  const ownerByIdArr: any = ownerById[0]

  const firstCharOfAccount = account != null && account.slice(0, 4)
  const lastCharOfAccount = account != null && account.slice(-4)

  const accountName = account != null && `${firstCharOfAccount}...${lastCharOfAccount}`

  // console.log('?hasClaimed', hasClaimed)
  // console.log('?ownerById', ownerById)

  const nftIndex = hasClaimed && hasClaimed.indexOf(nftId)

  // not sure about this, you need to check if this oser own this nft in the view nft page.
  const youAreTheLastOwner = ownerById && ownerById[nftIndex] && ownerById[nftIndex].toString() === account.toString()

  const MINTED = amounts[nftIndex] ? parseInt(amounts[nftIndex].toString()) : 0
  const MAX_MINT = maxMintByNft[nftIndex] ? parseInt(maxMintByNft[nftIndex].toString()) : 0

  const walletCanClaim = maxMintPerNft === 0 || MINTED === undefined || MINTED < maxMintPerNft

  // console.log('CONTRACT/GALLERY INFO:', totalSupplyDistributed, rarity, priceMultiplier, maxMintPerNft, tokenPerBurn)
  // console.log('LIMITS BY NFT:', tokenPerBurn, amounts, maxMintByNft, prices)
  // console.log(nftId, 'walletCanClaim', walletCanClaim, maxMintPerNft, MINTED, MAX_MINT)

  const tokenIds = getTokenIds(nftId)
  const isSupplyAvailable = currentDistributedSupply < totalSupplyDistributed
  const walletOwnsNft = tokenIds && tokenIds.length > 0
  const Icon = state.isOpen ? ChevronUpIcon : ChevronDownIcon

  const fetchDetails = useCallback(async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }))
    try {
      const { methods } = getNftContract()
      const nftCount = await methods.nftCount(nftId).call()
      const nftBurnCount = await methods.nftBurnCount(nftId).call()

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isDataFetched: true,
        nftCount: parseInt(nftCount, 10),
        nftBurnCount: parseInt(nftBurnCount, 10),
      }))
    } catch (error) {
      console.error(error)
    }
  }, [nftId])

  const handleClick = async () => {
    if (state.isOpen) {
      setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }))
    } else {
      try {
        await fetchDetails()
      } catch (error) {
        console.error(error)
      } finally {
        setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }))
      }
    }
  }

  const handleSuccess = () => {
    fetchDetails()
    reInitialize()
  }

  const [onPresentClaimModal] = useModal(<ClaimNftModal nft={nft} onSuccess={handleSuccess} />)
  const [onPresentBurnModal] = useModal(<BurnNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />)
  const [onPresentTransferModal] = useModal(
    <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
  )

  return (
    <Card isActive={walletOwnsNft}>
      <Image src={`/images/nfts/${previewImage}`} alt={name} originalLink={walletOwnsNft ? originalImage : null} />
      <CardBody>
        <Header>
          <Heading>{name}</Heading>
          {isInitialized && walletCanClaim && (
            <Tag outline variant="success">
              {TranslateString(526, 'Available')}
            </Tag>
          )}
          {isInitialized && tokenIds && (
            <Tag outline variant="secondary">
              {TranslateString(999, 'In Wallet')}
            </Tag>
          )}
        </Header>
        {isInitialized && walletOwnsNft && (
          <Button fullWidth variant="secondary" mt="24px" onClick={onPresentTransferModal}>
            {TranslateString(999, 'Transfer')}
          </Button>
        )}
        {isInitialized && walletCanClaim && isSupplyAvailable && (
          <Button fullWidth onClick={onPresentClaimModal} mt="24px">
            {TranslateString(999, 'Claim this NFT')} for {PRICE} LIFE
          </Button>
        )}
        {isInitialized && youAreTheLastOwner && (
          <Button fullWidth onClick={() => history.push(`detail/${nftId}`)} mt="24px">
            <Text>
              View NFT ({MINTED} of {MAX_MINT})
            </Text>
          </Button>
        )}
        {isInitialized && canBurnNft && walletOwnsNft && (
          <Button variant="danger" fullWidth onClick={onPresentBurnModal} mt="24px">
            {TranslateString(999, 'Trade in for LIFE')}
          </Button>
        )}
      </CardBody>
      <CardFooter p="0">
        <DetailsButton endIcon={<Icon width="24px" color="primary" />} onClick={handleClick}>
          {state.isLoading ? TranslateString(999, 'Loading...') : TranslateString(999, 'Details')}
        </DetailsButton>
        {state.isOpen && (
          <InfoBlock>
            <Text as="p" color="textSubtle" mb="16px" style={{ textAlign: 'center' }}>
              {description}
            </Text>
            <InfoRow>
              <Text>{TranslateString(999, 'Value if traded in')}:</Text>
              <Value>10 LIFE</Value>
            </InfoRow>
            <InfoRow>
              <Text>{TranslateString(999, 'Number minted')}:</Text>
              <Value>{state.nftCount + state.nftBurnCount}</Value>
            </InfoRow>
          </InfoBlock>
        )}
      </CardFooter>
    </Card>
  )
}

export default NftCard
