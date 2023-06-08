type CountryItemProps = {
  name: string
  population: number
  region: string
  capital?: string
  flag: string
}

export const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryItemProps) => {
  return (
    <div className="bg-dark-blue text-white text-xs rounded-sm shadow-lg hover:scale-110 hover:cursor-pointer">
      <img
        src={flag}
        alt={name}
        className=" object-cover w-full h-52 rounded-t-sm"
      />
      <div className="m-4 flex flex-col gap-2">
        <h2 className="text-base font-extrabold mb-3">{name}</h2>
        <p className="text-lg text-gray-300">
          <span className="font-semibold text-sm mr-1">Population:</span>
          {population.toLocaleString()}
        </p>
        <p className="text-lg text-gray-300">
          <span className="font-semibold text-sm mr-1">Region:</span>
          {region}
        </p>
        <p className="text-lg text-gray-300">
          <span className="font-semibold text-sm mr-1">Capital:</span>
          {capital}
        </p>
      </div>
    </div>
  )
}
