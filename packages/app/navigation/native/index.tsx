import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { LoginScreen } from '../../features/login/screen'
import { SignUpScreen } from '../../features/signup/screen'
import { CoinDetailScreen } from '../../features/coin/detail-screen'
import { OnboardingScreen } from 'app/features/onboarding/screen'
import { ProfileScreen } from 'app/features/profile/screen'
import { isWeb } from 'app/constants'
import { useSession } from 'app/store/user'
import { MobileNavigation } from 'app/components/MobileNavigation'

const Stack = createNativeStackNavigator<{
  home: undefined
  login: undefined
  signup: undefined
  onboarding: undefined
  profile: undefined
  'coin-detail': {
    name: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
        }}
      />

      {!isWeb && (
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{
            title: 'Onboarding',
            headerBackButtonMenuEnabled: false,
            headerBackVisible: false,
          }}
        />
      )}
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
          headerRight: () => <MobileNavigation />,
        }}
      />
      <Stack.Screen
        name="coin-detail"
        component={CoinDetailScreen}
        options={{
          title: '',
          headerRight: () => <MobileNavigation />,
        }}
      />

      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  )
}
