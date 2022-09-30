import React from 'react'
import { TextLink } from 'solito/link'
import { Box, HStack, Text } from 'native-base'
import { useSession } from '../store/user'

import { isWeb } from '../constants'
import { Link } from 'solito/link'

export function Header() {
  const isLoggedIn = useSession((state) => state.isLoggedIn)
  const user = useSession((state) => state.email)

  return (
    <Box
      height={isWeb ? 20 : 0}
      bg="#1FCAFF"
      flexDirection={isWeb ? 'row' : 'column'}
      alignItems="center"
      justifyContent="space-between"
      paddingRight={4}
    >
      {isWeb ? (
        <>
          <Box
            width="lg"
            height="full"
            paddingX={4}
            paddingY={2}
            alignItems="center"
            justifyContent="center"
          >
            <Link href="/">
              <Text color="white" fontSize="3xl" fontWeight="bold">
                NE Crypto
              </Text>
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
