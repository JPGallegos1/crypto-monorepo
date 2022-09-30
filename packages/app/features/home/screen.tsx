import React, { useEffect, useState } from 'react'
import { Center, HStack, Text, VStack, Box } from 'native-base'
import { ICryptoCurrency } from 'http/types/cryptocoins'
import { isWeb, columnsTitle } from 'app/constants'
import cryptocoinsService from 'http/services/cryptocoin.service'
import { Title } from 'app/components/Title'
import { CoinList } from 'app/components/CoinList'

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

  return (
    <Center width="full" marginY="16">
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
              background="#1FCAFF"
            >
              {columnsTitle.map((row, index) => (
                <Box width={row.width} key={row.text.length + index}>
                  <Text textTransform="uppercase" color="white">
                    {row.text}
                  </Text>
                </Box>
              ))}
            </HStack>
          )}
          <CoinList coins={coins} coinsData={coinsData} />
        </VStack>
      </VStack>
    </Center>
  )
}
