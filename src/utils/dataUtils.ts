import countries from '../data/data.json'

export const newData = countries.map((item) => {
  return {
    name: item.name,
    topLevelDomain: item.topLevelDomain,
    capital: item.capital,
    subregion: item.subregion,
    region: item.region,
    population: item.population,
    borders: item.borders,
    nativeName: item.nativeName,
    currencies: item.currencies,
    languages: item.languages.map((item) => item.name),
    flag: item.flag,
  }
})
