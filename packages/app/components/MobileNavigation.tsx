import { useSession } from 'app/store/user'
import { HStack, Text } from 'native-base'
import { TextLink } from 'solito/link'

export function MobileNavigation() {
  const user = useSession((state) => state.email)
  return (
    <HStack space={4}>
      <Text color="black">Welcome, {user}</Text>

      <TextLink href="/profile">
        <Text color="black">Profile</Text>
      </TextLink>
    </HStack>
  )
}
