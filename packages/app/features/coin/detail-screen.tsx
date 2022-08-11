import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import { Center, Heading, Button, Box, ChevronLeftIcon } from 'native-base'
import { ICryptoCurrency } from 'http/types/cryptocoins'

type Query = {
  name: string
  price: string
  market_cap: string
}

const { useParam } = createParam<Query>()

export function CoinDetailScreen() {
  const [name] = useParam('name')
  const [price] = useParam('price')
  const [market_cap] = useParam('market_cap')

  console.log({ name, price, market_cap })
  return (
    <Center
      flex="1"
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      {/* <Heading>{`Hey there, ${name}! 👋`}</Heading> */}
      <Box mt="6">
        <SolitoLink href="/">
          <Button
            pointerEvents="none"
            leftIcon={<ChevronLeftIcon size="xs" />}
            variant="outline"
            colorScheme="coolGray"
          >
            Go Back
          </Button>
        </SolitoLink>
      </Box>
    </Center>
  )
}
