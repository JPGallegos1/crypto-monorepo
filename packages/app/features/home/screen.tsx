import React, { useEffect, useState } from 'react'
import {
  Center,
  HStack,
  Text,
  VStack,
  Box,
  FlatList,
  Avatar,
  Spinner,
} from 'native-base'
import { ICryptoCurrency } from 'http/types/cryptocoins'
import { isWeb, columnsTitle } from 'app/constants'
import cryptocoinsService from 'http/services/cryptocoin.service'
import { Title } from 'app/components/Title'
import { CoinLink } from 'app/components/CoinLink'

type Props = {
  route: {
    params: {
      coins: ICryptoCurrency[]
    }
  }
}

export function HomeScreen({ route }: Props) {
  const [coinsData, setCoinsData] = useState<ICryptoCurrency[] | null>([])
  const coins = route.params?.coins

  useEffect(() => {
    const getCoinsData = async () => {
      await cryptocoinsService
        .getCoins()
        .then((response: any) => {
          setCoinsData(response)
        })
        .catch((error) => console.log(error))
    }
    getCoinsData()
  }, [])

  const transformMarketCap = (item: ICryptoCurrency) => {
    return item.currency.includes('BTC') || item.currency.includes('ETH')
      ? item.market_cap.slice(0, 3)
      : item.market_cap.slice(0, 2)
  }

  const transformCoinDetail = (item: string) => {
    return Number(item).toString().slice(0, 2)
  }

  return (
    <Center width="full">
      <VStack alignItems="center" space="md" width="100%">
        {isWeb && <Title title="Cryptocurrency Prices" />}

        <VStack width="80%">
          {isWeb && (
            <HStack
              space={4}
              justifyContent="space-between"
              width="full"
              borderBottomWidth="1"
              borderColor="black"
              padding={2}
              background="gray.300"
            >
              {columnsTitle.map((row, index) => (
                <Box width={row.width} key={row.text.length + index}>
                  <Text textTransform="uppercase">{row.text}</Text>
                </Box>
              ))}
            </HStack>
          )}
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
                      max_supply: transformCoinDetail(
                        item.max_supply as string
                      ),
                    },
                  }}
                >
                  <HStack
                    space={4}
                    alignItems="center"
                    justifyContent="space-between"
                    width="full"
                    borderBottomWidth="1"
                    borderColor="black"
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
                                  (item['1d']
                                    .price_change_pct as unknown as number) *
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
                              (item['1d']
                                .price_change_pct as unknown as number) * 100
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
        </VStack>
      </VStack>
    </Center>
  )
}
