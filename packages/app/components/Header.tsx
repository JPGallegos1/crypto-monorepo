import React from 'react'
import { TextLink } from 'solito/link'
import { Box, HStack, Text, IconButton, Icon } from 'native-base'
import { Entypo } from '@expo/vector-icons'

import Logo from './Logo'
import { isWeb } from '../constants'

export function Header() {
  return (
    <Box
      height="20"
      bg="#1a1a1a"
      flexDirection={isWeb ? 'row' : 'column'}
      alignItems="center"
      justifyContent="space-between"
      paddingRight={4}
    >
      <Box width="lg" height="full" paddingX={4} paddingY={2}>
        <Logo />
      </Box>

      {isWeb && (
        <HStack flexDirection="row" space={4}>
          <TextLink href="/">
            <Text color="white">Home</Text>
          </TextLink>

          <TextLink href="/login">
            <Text color="white">Login</Text>
          </TextLink>
        </HStack>
      )}
    </Box>
  )
}
