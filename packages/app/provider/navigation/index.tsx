import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider<FC>({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'login',
            screens: {
              login: 'login',
              home: '',
              'coin-detail': 'coin/:name',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
