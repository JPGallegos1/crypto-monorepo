import { TextLink } from 'solito/link'
import React, { useEffect, useState } from 'react'
import {
  Center,
  HStack,
  Text,
  Heading,
  VStack,
  Box,
  FlatList,
  Avatar,
  Pressable,
} from 'native-base'
import { ICryptoCurrency } from 'http/types/cryptocoins'
import { isWeb } from 'app/constants'
import cryptocoinsService from 'http/services/cryptocoin.service'

type Props = {
  route: {
    params: {
      coins: ICryptoCurrency[]
    }
  }
}

export function HomeScreen({ route }: Props) {
  const [coinsData, setCoinsData] = useState<ICryptoCurrency[]>([])
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

  return (
    <Center width="full">
      <VStack alignItems="center" space="md" width="100%">
        <Box padding={2}>
          <Heading
            size="xl"
            textAlign="center"
            color="green.600"
            marginBottom={8}
            textTransform="uppercase"
          >
            Top Cryptocurrency Prices
          </Heading>
        </Box>

        <VStack width="80%">
          <HStack
            space={4}
            justifyContent="space-between"
            width="full"
            borderBottomWidth="1"
            borderColor="black"
            padding={2}
            background="gray.300"
          >
            <Box flex={isWeb ? '0 0 10%' : 0}>
              <Text>#</Text>
            </Box>

            <Box flex={isWeb ? '0 0 25%' : 0}>
              <Text textTransform="uppercase">Name</Text>
            </Box>

            <Box flex={isWeb ? '0 0 15%' : 0}>
              <Text textTransform="uppercase">Price</Text>
            </Box>

            <Box flex={isWeb ? '0 0 15%' : 0}>
              <Text textTransform="uppercase">24h Change</Text>
            </Box>

            <Box flex={isWeb ? '0 0 15%' : 0}>
              <Text textTransform="uppercase">Market Cap</Text>
            </Box>
          </HStack>
          <FlatList
            data={coinsData}
            renderItem={({ item }) => {
              console.log(item.rank)
              return (
                <Pressable _hover={{ bg: 'gray.200' }}>
                  <HStack
                    space={4}
                    alignItems="center"
                    justifyContent="space-between"
                    width="full"
                    borderBottomWidth="1"
                    borderColor="black"
                    padding={2}
                  >
                    <Box flex={isWeb ? '0 0 10%' : 0}>
                      <Text>{item.rank}</Text>
                    </Box>

                    <HStack
                      space={4}
                      flex={isWeb ? '0 0 25%' : 0}
                      alignItems="center"
                    >
                      <Box>
                        <Avatar size="36px" source={{ uri: item?.logo_url }} />
                      </Box>

                      <Box>
                        <Text>{item?.name}</Text>
                        <Text>{item?.currency}</Text>
                      </Box>
                    </HStack>

                    <Box flex={isWeb ? '0 0 10%' : 0}>
                      <Text>${Number(item?.price).toFixed()}</Text>
                    </Box>

                    <Box flex={isWeb ? '0 0 10%' : 0}>
                      <Text
                        color={
                          !item['1d']?.price_change_pct.includes('-')
                            ? 'green.600'
                            : 'red.400'
                        }
                      >
                        {
                          +(
                            (item['1d']
                              ?.price_change_pct as unknown as number) * 100
                          ).toFixed(2)
                        }
                        %
                      </Text>
                    </Box>

                    {isWeb && (
                      <Box flex={isWeb ? '0 0 10%' : 0}>
                        <Text>
                          {item?.currency.includes('BTC') ||
                          item?.currency.includes('ETH')
                            ? item?.market_cap.slice(0, 3)
                            : item?.market_cap.slice(0, 2)}
                           B
                        </Text>
                      </Box>
                    )}
                  </HStack>
                </Pressable>
              )
            }}
            keyExtractor={(item, index) => (isWeb ? item.id : index.toString())}
          />
        </VStack>
      </VStack>
    </Center>
  )
}
