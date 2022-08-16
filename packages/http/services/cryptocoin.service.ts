import http from 'http/utils/axios'
import type { ICryptoCurrency } from 'http/types/cryptocoins'

// TODO: fix any type

const cryptocoinsService = {
  getCoins: () => {
    return http<ICryptoCurrency>({
      method: 'GET',
      url: `https://api.nomics.com/v1/currencies/ticker?key=2725b144ddc4853f6c8ce5754799c4d48d1cf532&ids=BTC,ETH,XRP,USDT,USDC,BNB,ADA,BUSD,SOL,DOT&convert=USD`,
      validateStatus: (status) => {
        return status >= 200 && status < 300
      },
    })
  },
  getPrices: (coin: string, day: string) => {
    return http<any>({
      method: 'GET',
      url: `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${day}`,
      validateStatus: (status) => {
        return status >= 200 && status < 300
      },
    })
  },
}

export default cryptocoinsService
