import type { SetStateAction, Dispatch } from 'react'
import { Link } from 'solito/link'
import {
  HStack,
  Pressable,
  Text,
  VStack,
  Box,
  Button,
  ChevronLeftIcon,
} from 'native-base'
import { isWeb } from 'app/constants'
import { DayInterval } from 'app/types'

type Props = {
  setInterval: (interval: DayInterval) => void
  interval: DayInterval
  name: string
}

export function CoinInterval({ setInterval, name, interval }: Props) {
  return (
    <HStack
      space={4}
      maxWidth="800px"
      width="full"
      justifyContent="space-between"
      paddingLeft={!isWeb ? 100 : 60}
      paddingRight={!isWeb ? 100 : 60}
    >
      <VStack space={4}>
        <Box>
          <Link href="/">
            <Button
              leftIcon={<ChevronLeftIcon size="xs" />}
              variant="unstyled"
              background="trueGray.100"
              padding={0}
              justifyContent="flex-start"
            >
              All prices
            </Button>
          </Link>
        </Box>

        <Box>
          <Text>{name} Price Chart (USD)</Text>
        </Box>
      </VStack>
      <HStack space={4} alignItems="flex-end">
        <Pressable _hover={{ bg: 'gray.200' }} onPress={() => setInterval('7')}>
          <Text borderBottomWidth={interval === '7' ? 1 : 0}>7D</Text>
        </Pressable>

        <Pressable
          _hover={{ bg: 'gray.200' }}
          onPress={() => setInterval('14')}
        >
          <Text borderBottomWidth={interval === '14' ? 1 : 0}>14D</Text>
        </Pressable>

        <Pressable
          _hover={{ bg: 'gray.200' }}
          onPress={() => setInterval('30')}
        >
          <Text borderBottomWidth={interval === '30' ? 1 : 0}>30D</Text>
        </Pressable>
      </HStack>
    </HStack>
  )
}
