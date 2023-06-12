import { useParams } from 'react-router-dom'
import { Countries } from '../redux/types'
import { useAppSelector } from '../redux/store'
import { getCountryDetail } from '../utils/searchUtils'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import Navbar from '../components/Navbar'

export const CountryDetails = () => {
  const values: Countries[] = useAppSelector(
    (state) => state.countries.countries
  )
  const { name } = useParams()
  const countryDetails: Countries = getCountryDetail(values, name)

  return (
    <div className="min-h-screen bg-v-dark-blue dark:bg-white w-full">
      <Navbar />
      <div className="p-12 w-full flex flex-col gap-16 2xl:justify-between">
        <div className="left-side">
          <Link to="/" className="link-btn">
            <BsArrowLeft size={25} />
            <span className="text-base">Back</span>
          </Link>
        </div>
        <div className="right-side">
          <img
            src={countryDetails.flag}
            alt={countryDetails.name}
            className="w-[520px] h-[340px] object-contain lg:object-fill "
          />
          <div className="flex flex-col lg:justify-center   gap-8">
            <h2 className="font-extrabold text-2xl dark:text-v-dark-blue-text">
              {countryDetails.name}
            </h2>
            <div className="flex flex-col lg:flex-row  gap-12">
              <div>
                <ul>
                  <li>
                    <span>Native Name:</span>
                    {countryDetails.nativeName}
                  </li>
                  <li>
                    <span>Population:</span>
                    {countryDetails.population}
                  </li>
                  <li>
                    <span>Region:</span>
                    <span>{countryDetails.region}</span>
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
              <div>
                <ul>
                  <li>
                    <span>Top Level Domain:</span>
                    {countryDetails.topLevelDomain}
                  </li>
                  <li className="flex">
                    <span>Currencies:</span>
                    {countryDetails.currencies?.map((item, i) => {
                      if (
                        i ==
                        (countryDetails.currencies?.length as number) - 1
                      ) {
                        return <p key={i}>{item.name}</p>
                      }
                      return <p key={i}>{item.name},</p>
                    })}
                  </li>
                  <li className="flex">
                    <span>Languages:</span>
                    {countryDetails.languages?.map((item, i) => {
                      if (
                        (countryDetails.languages?.length as number) - 1 ==
                        i
                      ) {
                        return <p key={i}>{item}</p>
                      }
                      return <p key={i}>{item},</p>
                    })}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row   lg:items-center mt-4">
              <h3 className="border-header">Border Countries:</h3>
              <ul className="grid grid-cols-3 text-center gap-2 lg:grid-cols-4 ">
                {countryDetails.borders?.map((item) => {
                  return <li className="border-items">{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
