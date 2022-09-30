import type { ICryptoCurrency } from 'http/types/cryptocoins'

import { isWeb } from 'app/constants'
import { Avatar, Box, FlatList, HStack, Spinner, Text } from 'native-base'

import { CoinLink } from './CoinLink'
import { Title } from './Title'

type Props = { coinsData: ICryptoCurrency[] | null; coins: ICryptoCurrency[] }

export function CoinList({ coinsData, coins }: Props) {
  const transformMarketCap = (item: ICryptoCurrency) => {
    return item.currency.includes('BTC') || item.currency.includes('ETH')
      ? item.market_cap.slice(0, 3)
      : item.market_cap.slice(0, 2)
  }

  const transformCoinDetail = (item: string) => {
    return Number(item).toString().slice(0, 2)
  }

  return (
    <FlatList
      data={!isWeb ? coinsData : coins}
      ListEmptyComponent={<Spinner color="emerald.500" />}
      ListHeaderComponent={
        !isWeb ? <Title title="Cryptocurrency Prices" /> : null
      }
      renderItem={({ item }) => {
        return (
          <CoinLink
            href={{
              pathname: `/coin/${item.name}`,
              query: {
                name: item.name,
                symbol: item.symbol,
                market_cap: transformMarketCap(item),
                volume: transformCoinDetail(item['1d'].volume),
                circulating_supply: transformCoinDetail(
                  item.circulating_supply
                ),
                max_supply: transformCoinDetail(item.max_supply as string),
              },
            }}
          >
            <HStack
              space={4}
              alignItems="center"
              justifyContent="space-between"
              width="full"
              borderBottomWidth="1"
              borderColor="#E5E5E5"
              padding={2}
            >
              {isWeb && (
                <Box width={30}>
                  <Text>{item.rank}</Text>
                </Box>
              )}

              <HStack space={4} width={230} alignItems="center">
                {isWeb && (
                  <Box>
                    <Avatar size="36px" source={{ uri: item.logo_url }} />
                  </Box>
                )}

                <Box width={230}>
                  <HStack space={2}>
                    <Text>{item.name}</Text>
                    {!isWeb && (
                      <Text
                        color={
                          !item['1d'].price_change_pct.includes('-')
                            ? 'green.600'
                            : 'red.400'
                        }
                      >
                        {
                          +(
                            (item['1d'].price_change_pct as unknown as number) *
                            100
                          ).toFixed(2)
                        }
                        %
                      </Text>
                    )}
                  </HStack>
                  <Text>{item.currency}</Text>
                </Box>
              </HStack>

              <Box width={150}>
                <Text>${Number(item.price).toFixed()}</Text>
              </Box>

              {isWeb && (
                <Box width={150}>
                  <Text
                    color={
                      !item['1d'].price_change_pct.includes('-')
                        ? 'green.600'
                        : 'red.400'
                    }
                  >
                    {
                      +(
                        (item['1d'].price_change_pct as unknown as number) * 100
                      ).toFixed(2)
                    }
                    %
                  </Text>
                </Box>
              )}

              {isWeb && (
                <Box width={150}>
                  <Text>
                    {transformMarketCap(item)}
                     B
                  </Text>
                </Box>
              )}
            </HStack>
          </CoinLink>
        )
      }}
      keyExtractor={(item, index) => (isWeb ? item.id : index.toString())}
    />
  )
}
