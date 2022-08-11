import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from 'app/components'

import { HomeScreen } from '../../features/home/screen'
import { LoginScreen } from '../../features/login/screen'
import { CoinDetailScreen } from '../../features/coin/detail-screen'
import { OnboardingScreen } from 'app/features/onboarding/screen'
import { isWeb } from 'app/constants'

const Stack = createNativeStackNavigator<{
  home: undefined
  login: undefined
  onboarding: undefined
  'coin-detail': {
    name: string
  }
}>()

export function NativeNavigation() {
  let user = true
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <Header />,
      }}
    >
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      {!isWeb && user && (
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{
            title: 'Onboarding',
          }}
        />
      )}
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="coin-detail"
        component={CoinDetailScreen}
        options={{
          title: 'Coin',
        }}
      />
    </Stack.Navigator>
  )
}
