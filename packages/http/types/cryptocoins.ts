export interface ICryptoCurrency {
  id: string
  currency: string
  symbol: string
  name: string
  logo_url: string
  status: string
  price: string
  price_date: string
  price_timestamp: string
  circulating_supply: string
  max_supply?: string
  market_cap: string
  market_cap_dominance: string
  num_exchanges: string
  num_pairs: string
  num_pairs_unmapped: string
  first_candle: string
  first_trade: string
  first_order_book: string
  rank: string
  rank_delta: string
  high: string
  high_timestamp: string
  '1d': ICryptoVolatility
  '7d': ICryptoVolatility
  '30d': ICryptoVolatility
  '365d': ICryptoVolatility
  ytd: ICryptoVolatility
  platform_currency?: string
}

export interface ICryptoVolatility {
  volume: string
  price_change: string
  price_change_pct: string
  volume_change: string
  volume_change_pct: string
  market_cap_change: string
  market_cap_change_pct: string
}
