import { isWeb } from 'app/constants'
import { Box, Center, Text, VStack, Image, Heading, Button } from 'native-base'
import { useRouter } from 'solito/router'
import { useSession } from '../../store/user'

export function ProfileScreen() {
  const removeSession = useSession((state) => state.removeSession)
  const session = useSession((state) => state.email)
  const { push } = useRouter()

  const logOut = () => {
    removeSession()
    {
      !isWeb ? push('/login') : push('/')
    }
  }
  return (
    <Center flex="1">
      <VStack space={8}>
        <Heading size="xl" textAlign="center">
          Profile
        </Heading>
        <Box>
          <Image
            size={150}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: 'https://-page-icon.png',
            }}
            fallbackSource={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
          />
        </Box>
        <Button onPress={logOut} colorScheme="green">
          Log out
        </Button>
      </VStack>
    </Center>
  )
}
