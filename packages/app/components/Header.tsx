import React from 'react'
import { TextLink } from 'solito/link'
import { Box, HStack, Text, Menu, HamburgerIcon } from 'native-base'
import { useSession } from '../store/user'

import Logo from './Logo'
import { isWeb } from '../constants'
import { Pressable } from 'react-native'
import { Link } from 'solito/link'

export function Header() {
  const isLoggedIn = useSession((state) => state.isLoggedIn)
  const user = useSession((state) => state.email)

  return (
    <Box
      height={isWeb ? 20 : 0}
      bg={isWeb ? '#1a1a1a' : 'white'}
      flexDirection={isWeb ? 'row' : 'column'}
      alignItems="center"
      justifyContent="space-between"
      paddingRight={4}
    >
      {isWeb ? (
        <>
          <Box width="lg" height="full" paddingX={4} paddingY={2}>
            <Link href="/">
              <Logo />
            </Link>
          </Box>

          {isLoggedIn ? (
            <HStack flexDirection="row" space={4}>
              {user && <Text color="green.100">Welcome, {user}</Text>}

              <TextLink href="/profile">
                <Text color="white">Profile</Text>
              </TextLink>
            </HStack>
          ) : (
            <HStack flexDirection="row" space={4}>
              <TextLink href="/">
                <Text color="white">Home</Text>
              </TextLink>

              <TextLink href="/login">
                <Text color="white">Sign In</Text>
              </TextLink>
            </HStack>
          )}
        </>
      ) : (
        <HStack space={4}>
          <Text color="black">Welcome, {user}</Text>

          <TextLink href="/profile">
            <Text color="black">Profile</Text>
          </TextLink>
        </HStack>
      )}
    </Box>
  )
}
