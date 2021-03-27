import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import nfts from 'config/constants/nfts'
import NftCard from './components/NftCard'
import NftList from './components/NftList'
import NftProvider from './contexts/NftProvider'
import NftInfo from './components/NftInfo'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Detail = (props) => {
  const TranslateString = useI18n()
  const { match } = props
  const id = parseInt(match.params.id)

  const nft1 = nfts.filter((nft) => nft.nftId === id)

  return (
    <NftProvider>
      <Page>
        <StyledHero>
          <Heading as="h1" size="xxl" color="secondary" mb="24px">
            NFTs
          </Heading>
          <Heading as="h2" size="lg" color="secondary">
            {TranslateString(999, 'Trade in for LIFE, or keep for your collection!')}
          </Heading>
        </StyledHero>
        <NftCard nft={nft1[0]} />
      </Page>
    </NftProvider>
  )
}

export default Detail
