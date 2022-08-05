import { NativeBaseProvider } from 'native-base'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationProvider>
  )
}
