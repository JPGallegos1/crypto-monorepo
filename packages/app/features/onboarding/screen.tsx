import { useRouter } from 'solito/router'
import { Image } from 'native-base'
import Onboarding from 'react-native-onboarding-swiper'

export function OnboardingScreen() {
  const { push } = useRouter()
  return (
    <Onboarding
      onSkip={() => push('/')}
      onDone={() => push('/')}
      bottomBarColor="rgb(22, 163, 74)"
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/financial.png')}
              alt="Financial Illustration"
              size={150}
              borderRadius={100}
            />
          ),
          title: 'Greener',
          subtitle: 'We gonna eat the world',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/ether.png')}
              alt="Ethereum Illustration"
              size={150}
              borderRadius={100}
            />
          ),
          title: 'Greener',
          subtitle: 'With technology',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/descentralized.png')}
              alt="Bitcoin Illustration"
              size={150}
              borderRadius={100}
            />
          ),
          title: 'Greener',
          subtitle: 'With Blockchain',
        },
      ]}
    />
  )
}
