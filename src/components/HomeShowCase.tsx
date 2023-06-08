import { ChangeEvent, useEffect, useState } from 'react'
import countries from '../data/data.json'
import { CountryCard } from './CountryCard'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { addCountries } from '../redux/features/countriesSlice'

export const HomeShowCase = () => {
  const dispatch = useAppDispatch()
  const countriesData = useAppSelector((state) => state.countries.countries)
  const newData = countries.map((item) => {
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

  const [searchText, setSearchText] = useState<string>()

  useEffect(() => {
    const filteredArray = newData.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(searchText == undefined ? '' : searchText.toLowerCase())
    })
    dispatch(addCountries(filteredArray))
  }, [searchText])

  const searchCountryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  return (
    <div className="p-6 lg:p-12">
      <div className="mt-6 mb-12 lg:flex lg:justify-between grid grid-cols-1 gap-8">
        <div className="relative">
          <AiOutlineSearch
            size={25}
            className="absolute text-white bottom-1/2 translate-y-1/2 left-4"
          />
          <input
            type="text"
            value={searchText}
            onChange={searchCountryHandler}
            className="bg-dark-blue py-4 px-14 lg:w-[500px] w-full rounded-md text-white outline-none text-lg"
            placeholder="Search for a country..."
          />
        </div>
        <div className="flex gap-x-6">
          <select className="bg-dark-blue w-[200px] text-white p-4 text-base rounded-sm ">
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
          </select>
          <select className="bg-dark-blue w-[200px] text-white p-4 text-base rounded-sm ">
            <option value="">Order by</option>
            <option value="">Population</option>
            <option value="">A-z</option>
            <option value="">Z-a</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
        {countriesData.map((item) => {
          return <CountryCard {...item} />
        })}
      </div>
    </div>
  )
}
