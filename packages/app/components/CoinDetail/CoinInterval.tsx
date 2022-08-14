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

type Props = {
  interval: Dispatch<SetStateAction<'7' | '14' | '30'>>
  name: string
}

export function CoinInterval({ interval, name }: Props) {
  return (
    <HStack
      space={4}
      maxWidth="800px"
      width="full"
      justifyContent="space-between"
      paddingLeft={60}
      paddingRight={60}
    >
      <VStack space={4}>
        <Box>
          <Link href="/">
            <Button
              leftIcon={<ChevronLeftIcon size="xs" />}
              variant="unstyled"
              background="white"
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
        <Pressable _hover={{ bg: 'gray.200' }} onPress={() => interval('7')}>
          <Text>7D</Text>
        </Pressable>

        <Pressable _hover={{ bg: 'gray.200' }} onPress={() => interval('14')}>
          <Text>14D</Text>
        </Pressable>

        <Pressable _hover={{ bg: 'gray.200' }} onPress={() => interval('30')}>
          <Text>30D</Text>
        </Pressable>
      </HStack>
    </HStack>
  )
}
