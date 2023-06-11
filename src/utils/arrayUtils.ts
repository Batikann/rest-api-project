import { Currencies } from '../redux/types'

export const arrayLog = (currencies: Currencies[], dot: string) => {
  currencies.map((element, index) => {
    if (index == currencies.length - 1) {
      return element
    }
    return element + dot
  })
}
