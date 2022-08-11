import React from 'react'
import { TextLink } from 'solito/link'
import {
  Box,
  HStack,
  Text,
  IconButton,
  Icon,
  Menu,
  HamburgerIcon,
} from 'native-base'
import { Entypo } from '@expo/vector-icons'

import Logo from './Logo'
import { isWeb } from '../constants'
import { Pressable } from 'react-native'

export function Header() {
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
            <Logo />
          </Box>

          <HStack flexDirection="row" space={4}>
            <TextLink href="/">
              <Text color="white">Home</Text>
            </TextLink>

            <TextLink href="/login">
              <Text color="white">Login</Text>
            </TextLink>
          </HStack>
        </>
      ) : (
        <HStack
          width="full"
          alignItems="center"
          justifyContent="flex-start"
          borderColor="black"
          borderWidth="2"
        >
          <Menu
            w="full"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  <HamburgerIcon />
                </Pressable>
              )
            }}
          >
            <Menu.Item>Profile</Menu.Item>
          </Menu>
        </HStack>
      )}
    </Box>
  )
}
