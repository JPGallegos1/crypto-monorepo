import { ColumnsTitle } from 'app/types'
import { Platform } from 'react-native'

export const isWeb = Platform.OS === 'web'
export const columnsTitle: ColumnsTitle[] = [
  {
    width: 30,
    text: '#',
  },
  {
    width: 230,
    text: 'Name',
  },
  {
    width: 150,
    text: 'Price',
  },
  {
    width: 150,
    text: '24H Change',
  },
  {
    width: 150,
    text: 'Market Cap',
  },
]
