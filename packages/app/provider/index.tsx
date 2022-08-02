import React from 'react'
import { NavigationProvider } from './navigation'
import { NativeBaseProvider } from 'native-base'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationProvider>
  )
}
