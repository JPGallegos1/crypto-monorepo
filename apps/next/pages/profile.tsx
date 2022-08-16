import { ProfileScreen as NativeProfileScreen } from 'app/features/profile/screen'
import { useSession } from 'app/store/user'
import { useRouter } from 'solito/router'
import { useEffect } from 'react'

export default function ProfileScreen() {
  const isLoggedIn = useSession((state) => state.isLoggedIn)
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return <div>{!isLoggedIn && <div>Loading...</div>}</div>
  }

  return <NativeProfileScreen />
}
