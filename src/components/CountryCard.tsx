import { convertNameToPathName } from '../utils/pathUtils'
import { CountryItemProps } from './type'
import { Link } from 'react-router-dom'

export const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryItemProps) => {
  return (
    <Link to={`details/${convertNameToPathName(name)}`}>
      <div className="bg-dark-blue dark:bg-white dark:text-v-dark-blue-text text-white text-xs rounded-sm shadow-custom-box-shadow lg:hover:scale-110 lg:hover:cursor-pointer">
        <img
          src={flag}
          alt={name}
          className=" object-cover w-full h-52 rounded-t-sm"
        />
        <div className="m-4 flex flex-col gap-2 p-6">
          <h2 className="text-base font-extrabold mb-3">{name}</h2>
          <p className="text-base text-gray-300 dark:text-gray-600">
            <span className="font-semibold text-sm mr-1 dark:text-v-dark-blue-text">
              Population:
            </span>
            {population.toLocaleString()}
          </p>
          <p className="text-base text-gray-300 dark:text-gray-700">
            <span className="font-semibold text-sm mr-1 dark:text-v-dark-blue-text">
              Region:
            </span>
            {region}
          </p>
          <p className="text-base text-gray-300 dark:text-gray-700">
            <span className="font-semibold text-sm mr-1 dark:text-v-dark-blue-text">
              Capital:
            </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  )
}
