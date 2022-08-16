import { DayInterval } from 'app/types'
import cryptocoinsService from 'http/services/cryptocoin.service'
import { useState, useEffect, useCallback } from 'react'

export function useCoinPrices(name: string) {
  const [prices, setPrices] = useState<Array<string[]>>([])
  const [interval, setInterval] = useState<DayInterval>('7')

  const getPrices = useCallback(async () => {
    const response = await cryptocoinsService.getPrices(
      name?.toLocaleLowerCase(),
      interval
    )

    const pricesData = response.prices?.map((price) => {
      return {
        x: price[0],
        y: price[1],
      }
    })
    setPrices(pricesData)
  }, [interval, name])

  useEffect(
    function updateChartPrices() {
      getPrices()
    },
    [getPrices]
  )

  return {
    prices,
    setInterval,
    interval,
  }
}
