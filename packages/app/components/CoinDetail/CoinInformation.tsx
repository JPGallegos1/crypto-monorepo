import { HStack, Text, VStack } from 'native-base'

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
    <HStack justifyContent="space-between" paddingLeft={60} paddingRight={60}>
      <VStack space={2}>
        <Text color="gray.600">Market Cap</Text>

        <Text fontSize="md" color="gray.700" fontWeight={700}>
          {market_cap} B
        </Text>
      </VStack>

      <VStack space={2}>
        <Text color="gray.600">24H Volume</Text>

        <Text fontSize="md" color="gray.700" fontWeight={700}>
          {volume} B
        </Text>
      </VStack>

      <VStack space={2}>
        <Text color="gray.600">Circulating Supply</Text>

        <Text fontSize="md" color="gray.700" fontWeight={700}>
          {circulating_supply} M {symbol?.toUpperCase()}
        </Text>
      </VStack>

      <VStack space={2}>
        <Text color="gray.600">Max Supply</Text>

        <Text fontSize="md" color="gray.700" fontWeight={700}>
          {max_supply} M {symbol?.toUpperCase()}
        </Text>
      </VStack>
    </HStack>
  )
}
