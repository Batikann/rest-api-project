import { Countries } from '../redux/types'
import { convertNameToPathName } from './pathUtils'

export const searchCountry = (
  data: Countries[],
  searchText: string,
  region: string,
  query: string
) => {
  const filteredArray = data.filter((item) => {
    return region == null
      ? item.name.toLowerCase().includes(searchText.toLowerCase())
      : item.name.toLowerCase().includes(searchText.toLowerCase()) &&
          item.region.toLowerCase().includes(region.toLowerCase())
  })
  switch (query) {
    case 'population':
      return filteredArray.sort((a, b) => b.population - a.population)
    case 'a-z':
      return filteredArray.sort((a, b) => a.name.localeCompare(b.name))
    case 'z-a':
      return filteredArray.sort((a, b) => b.name.localeCompare(a.name))
    default:
      return filteredArray
  }
}

export const getCountryDetail = (
  data: Countries[],
  name: string | undefined
) => {
  return data.filter((item) => convertNameToPathName(item.name) == name)[0]
}
