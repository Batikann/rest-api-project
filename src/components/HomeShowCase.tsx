import { ChangeEvent, useEffect, useState } from 'react'
import { CountryCard } from './CountryCard'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { addCountries } from '../redux/features/countriesSlice'
import { searchCountry } from '../utils/searchUtils'
import { newData } from '../utils/dataUtils'

export const HomeShowCase = () => {
  const countriesData = useAppSelector((state) => state.countries.countries)
  const dispatch = useAppDispatch()
  const [searchText, setSearchText] = useState<string>('')
  const [region, setRegion] = useState<string>('')
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    dispatch(addCountries(searchCountry(newData, searchText, region, query)))
  }, [searchText, region, query])

  const searchCountryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  const handleRegionSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setRegion(e.target.value)
  }

  const handleQuery = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setQuery(e.target.value.toLowerCase())
  }
  return (
    <div className="p-6 lg:p-12">
      <div className="mt-6 mb-12 lg:flex lg:justify-between grid grid-cols-1 gap-7">
        <div className="relative">
          <AiOutlineSearch
            size={25}
            className="absolute text-white bottom-1/2 translate-y-1/2 left-4 dark:text-v-dark-blue-text dark:shadow-xl"
          />
          <input
            type="text"
            value={searchText}
            onChange={searchCountryHandler}
            className="bg-dark-blue dark:bg-white shadow-custom-box-shadow dark:text-v-dark-blue py-4 px-14 lg:w-[500px] w-full rounded-md text-white outline-none text-lg"
            placeholder="Search for a country..."
          />
        </div>
        <div className="flex gap-6">
          <select
            value={region}
            className="bg-dark-blue dark:bg-white dark:text-v-dark-blue-text  w-[200px] text-white p-4 text-base rounded-sm shadow-custom-box-shadow "
            onChange={handleRegionSelect}
          >
            <option value="">Select Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select
            value={query}
            className="bg-dark-blue w-[200px] shadow-custom-box-shadow dark:bg-white dark:text-v-dark-blue-text  text-white p-4 text-base rounded-sm "
            onChange={handleQuery}
          >
            <option value="">Order by</option>
            <option value="population">Population</option>
            <option value="a-z">A-z</option>
            <option value="z-a">Z-a</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 ">
        {countriesData.map((item, i) => {
          return (
            <span key={i}>
              <CountryCard {...item} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
