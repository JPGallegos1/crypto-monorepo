import { isWeb } from 'app/constants'
import { Flex, HStack, Text, VStack } from 'native-base'

type Props = {
  market_cap: string
  volume: string
  circulating_supply: string
  symbol: string
  max_supply?: string
}

export function CoinInformation({
  market_cap,
  volume,
  circulating_supply,
  symbol,
  max_supply,
}: Props) {
  return (
    <HStack
      justifyContent={!isWeb ? 'space-around' : 'space-between'}
      paddingLeft={!isWeb ? 90 : 60}
      paddingRight={!isWeb ? 90 : 60}
    >
      <Flex
        flexDirection={!isWeb ? 'column' : 'row'}
        flex={!isWeb ? 0 : 1}
        justifyContent={!isWeb ? 'flex-start' : 'space-around'}
      >
        <VStack space={!isWeb ? 0 : 2} marginBottom={!isWeb ? 4 : 0}>
          <Text color="gray.600">Market Cap</Text>

          <Text fontSize="md" color="gray.700" fontWeight={700}>
            {market_cap} B
          </Text>
        </VStack>

        <VStack space={!isWeb ? 0 : 2}>
          <Text color="gray.600">24H Volume</Text>

          <Text fontSize="md" color="gray.700" fontWeight={700}>
            {volume} B
          </Text>
        </VStack>
      </Flex>

      <Flex
        flexDirection={!isWeb ? 'column' : 'row'}
        flex={!isWeb ? 0 : 1}
        justifyContent={!isWeb ? 'flex-start' : 'space-around'}
      >
        <VStack space={!isWeb ? 0 : 2} marginBottom={!isWeb ? 4 : 0}>
          <Text color="gray.600">Circulating Supply</Text>

          <Text fontSize="md" color="gray.700" fontWeight={700}>
            {circulating_supply} M {symbol?.toUpperCase()}
          </Text>
        </VStack>

        <VStack space={!isWeb ? 0 : 2}>
          <Text color="gray.600">Max Supply</Text>

          <Text fontSize="md" color="gray.700" fontWeight={700}>
            {max_supply} M {symbol?.toUpperCase()}
          </Text>
        </VStack>
      </Flex>
    </HStack>
  )
}
