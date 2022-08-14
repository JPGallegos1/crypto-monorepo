import React from 'react'
import { createParam } from 'solito'
import { Center, VStack } from 'native-base'

import { useCoinPrices } from 'app/hooks/useCoinPrices'
import { CoinInterval } from 'app/components/CoinDetail/CoinInterval'
import { CoinChart } from 'app/components/CoinDetail/CoinChart'
import { CoinInformation } from 'app/components/CoinDetail/CoinInformation'

type Query = {
  name: string
  symbol: string
  market_cap: string
  volume: string
  circulating_supply: string
  max_supply: string
}

const { useParam } = createParam<Query>()

export function CoinDetailScreen() {
  const [name] = useParam('name')
  const [symbol] = useParam('symbol')
  const [market_cap] = useParam('market_cap')
  const [volume] = useParam('volume')
  const [circulating_supply] = useParam('circulating_supply')
  const [max_supply] = useParam('max_supply')
  const { prices, setInterval } = useCoinPrices(name as string)

  return (
    <Center flex="1">
      <VStack space={4}>
        <CoinInterval interval={setInterval} name={name as string} />

        <CoinChart prices={prices && (prices as Array<string[]>)} />

        <CoinInformation
          symbol={symbol as string}
          market_cap={market_cap as string}
          volume={volume as string}
          circulating_supply={circulating_supply as string}
          max_supply={max_supply}
        />
      </VStack>
    </Center>
  )
}
