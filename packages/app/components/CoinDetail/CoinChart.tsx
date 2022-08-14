import { Box } from 'native-base'
import { VictoryChart, VictoryLine } from 'victory'

type Props = {
  prices: Array<string[]>
}

export function CoinChart({ prices }: Props) {
  return (
    <Box justifyContent="center" alignItems="center">
      <VictoryChart width={800} padding={{ left: 60, right: 60 }}>
        <VictoryLine data={prices} x="" />
      </VictoryChart>
    </Box>
  )
}
