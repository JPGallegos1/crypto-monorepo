import { isWeb } from 'app/constants'
import { Box, Spinner } from 'native-base'
import { VictoryChart, VictoryLine } from 'victory'
import {
  VictoryChart as VictoryChartMobile,
  VictoryLine as VictoryLineMobile,
} from 'victory-native'

type Props = {
  prices: Array<string[]>
}

export function CoinChart({ prices }: Props) {
  return (
    <Box justifyContent="center" alignItems="center">
      {!isWeb ? (
        <VictoryChartMobile width={370} padding={{ left: 55, right: 55 }}>
          <VictoryLineMobile data={prices} x="" />
        </VictoryChartMobile>
      ) : (
        <VictoryChart width={800} padding={{ left: 60, right: 60 }}>
          <VictoryLine data={prices} x="" />
        </VictoryChart>
      )}
    </Box>
  )
}
