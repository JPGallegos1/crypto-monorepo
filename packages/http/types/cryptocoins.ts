export interface ICryptoCoins {
  id: string
  currency: string
  symbol: string
  name: string
  logo_url: string
  status: string
  price_date: Date
  price_timestamp: Date
  circulating_supply: string
  max_supply: string
  market_cap_dominance: string
  num_exchanges: string
  num_pairs: string
  num_pairs_unmapped: string
  first_candle: Date
  first_trade: Date
  first_order_book: Date
  rank: string
  rank_delta: string
  platform_currency: string
}
