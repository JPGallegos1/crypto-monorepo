import { TextLink } from 'solito/link'
import React from 'react'
import { Center, HStack, Text, Heading, Link, VStack, Box } from 'native-base'
import { ColorModeSwitch } from '../../components'

export function HomeScreen() {
  return (
    <Center>
      <VStack alignItems="center" space="md">
        <Heading>NativeBase + Solito ❤️</Heading>
        <HStack alignItems="center" space="sm">
          <Link href="https://solito.dev/" isExternal>
            <Text
              _light={{ color: 'gray.700' }}
              _dark={{ color: 'gray.400' }}
              underline
              fontSize={'xl'}
            >
              Learn Solito
            </Text>
          </Link>
          <Text>/</Text>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
        </HStack>
      </VStack>
      <ColorModeSwitch />
      <Box mt="6">
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <TextLink href="/login">Login</TextLink>
      </Box>
    </Center>
  )
}
