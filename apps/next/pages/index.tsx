import { HomeScreen as NativeHomeScreen } from 'app/features/home/screen'
import cryptocoinsService from 'http/services/cryptocoin.service'
import { ICryptoCurrency } from 'http/types/cryptocoins'
import type { GetServerSideProps } from 'next'

type Props = {
  coins: ICryptoCurrency[]
}

export default function HomeScreen({ coins }: Props) {
  return <NativeHomeScreen route={{ params: { coins } }} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const coins = await cryptocoinsService.getCoins()
  return {
    props: {
      coins,
    },
  }
}
