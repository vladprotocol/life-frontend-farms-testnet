import React from 'react'
import styled from 'styled-components'
import { Heading, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { useHistory } from 'react-router-dom'
import HowItWorks from './components/HowItWorks'
import NftList from './components/NftList'
import NftProvider from './contexts/NftProvider'
import NftInfo from './components/NftInfo'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Nft = () => {
  const TranslateString = useI18n()
  const history = useHistory()

  return (
    <NftProvider>
      <Page>
        <StyledHero>
          <Heading as="h1" size="xxl" color="#5ca269" mb="24px">
            NFTs
          </Heading>
          <Heading as="h2" size="lg" color="#5ca269">
            {TranslateString(999, 'Trade in for LIFE, or keep for your collection!')}
          </Heading>
        </StyledHero>
        <Button onClick={() => history.push(`nft`)} mt="24px">
          Common and Rare
        </Button>
        <Button onClick={() => history.push(`epic`)} mt="24px">
          Epic
        </Button>
        <Button onClick={() => history.push(`legendary`)} mt="24px">
          Legendary
        </Button>
        <NftInfo />
        <NftList />
      </Page>
    </NftProvider>
  )
}

export default Nft
