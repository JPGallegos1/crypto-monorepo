import { HomeScreen as NativeHomeScreen } from 'app/features/home/screen'
import cryptocoinsService from 'http/services/cryptocoin.service'

export default function HomeScreen({ coins }: any) {
  return <NativeHomeScreen route={{ params: { coins } }} />
}

export async function getStaticProps() {
  const coins = await cryptocoinsService.getCoins()
  return {
    props: {
      coins,
    },
  }
}
