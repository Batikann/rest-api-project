export type Currencies = {
  code: string
  name: string
  symbol: string
}

export interface Countries {
  name: string
  topLevelDomain: string[]
  capital: string | undefined
  subregion: string
  region: string
  population: number
  borders: string[] | undefined
  nativeName: string
  currencies: Currencies[] | undefined
  languages: string[] | undefined
  flag: string
}

export interface CountriesState {
  countries: Countries[]
}
