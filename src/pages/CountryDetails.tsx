import { useParams } from 'react-router-dom'
import { Countries } from '../redux/types'
import { useAppSelector } from '../redux/store'
import { getCountryDetail } from '../utils/searchUtils'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export const CountryDetails = () => {
  const values: Countries[] = useAppSelector(
    (state) => state.countries.countries
  )
  const { name } = useParams()
  const countryDetails = getCountryDetail(values, name)

  return (
    <div className="bg-v-dark-blue min-h-screen text-white px-8 py-12">
      <div className="flex flex-col gap-36 w-full md:flex-row">
        <div className="w-[40%]">
          <Link
            to="/"
            className=" text-white items-center gap-x-4 text-base bg-dark-blue inline-flex py-1 px-5 shadow-lg rounded-sm mb-20 "
          >
            <BsArrowLeft size={20} />
            <p>Back</p>
          </Link>
          <img src={countryDetails.flag} alt={countryDetails.name} />
        </div>
        <div className="flex flex-col justify-center w-[60%] items-center">
          <h2 className="font-extrabold text-xl mb-4">{countryDetails.name}</h2>
          <div className="md:flex md:gap-x-10">
            <div className="mb-3">
              <ul className="details-ul">
                <li>
                  <span>Native Name:</span>
                  <p>{countryDetails.nativeName}</p>
                </li>
                <li>
                  <span>Population:</span>
                  {countryDetails.population}
                </li>
                <li>
                  <span>Region:</span>
                  {countryDetails.region}
                </li>
                <li>
                  <span>Sub Region:</span>
                  {countryDetails.subregion}
                </li>
                <li>
                  <span>Capital:</span>
                  {countryDetails.capital}
                </li>
              </ul>
            </div>
            <div className="my-9">
              <ul className="details-ul">
                <li>
                  <span>Top Level Domain:</span>
                  {countryDetails.topLevelDomain}
                </li>
                <li>
                  <span>Currencies:</span>
                  {countryDetails.currencies?.map((item, i) => {
                    return <p key={i}>{item.code}</p>
                  })}
                </li>
                <li>
                  <span>Languages:</span>
                  {countryDetails.languages?.map((lang, i) => {
                    return <p key={i}>{lang}</p>
                  })}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Border Countries:</h3>
            <ul className="flex gap-4 flex-wrap">
              {countryDetails.borders?.map((border, i) => {
                return (
                  <li
                    className="bg-dark-blue text-sm py-1 px-4 rounded-sm"
                    key={i}
                  >
                    {border}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
