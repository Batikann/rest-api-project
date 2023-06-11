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
    <div className="p-6 lg:p-12 max-[320px]:p-3">
      <div className="mt-6 mb-12 lg:flex lg:justify-between grid grid-cols-1 gap-7">
        <div className="relative">
          <AiOutlineSearch size={25} className="search-icon" />
          <input
            type="text"
            value={searchText}
            onChange={searchCountryHandler}
            className="showcaseInput"
            placeholder="Search for a country..."
          />
        </div>
        <div className="flex gap-6 max-[320px]:flex-col">
          <select
            value={region}
            className="select-box "
            onChange={handleRegionSelect}
          >
            <option value="">Select Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select value={query} className="select-box " onChange={handleQuery}>
            <option value="">Order by</option>
            <option value="population">Population</option>
            <option value="a-z">A-z</option>
            <option value="z-a">Z-a</option>
          </select>
        </div>
      </div>
      <div className="countryCard-container ">
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
