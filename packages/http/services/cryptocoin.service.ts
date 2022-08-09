import http from 'http/utils/axios'
import type { ICryptoCoins } from 'http/types/cryptocoins'

const cryptocoinsService = {
  getCoins: () => {
    return http<ICryptoCoins>({
      method: 'GET',
      url: `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_KEY}&ids=BTC,ETH,XRP&convert=USD`,

      validateStatus: (status) => {
        return status >= 200 && status < 300
      },
    })
  },
}

export default cryptocoinsService
