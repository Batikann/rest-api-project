import { BsMoonFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="flex justify-between py-8 lg:px-12 px-6 items-center bg-dark-blue text-white ">
      <h1 className="lg:text-xl text-base md:text-lg font-extrabold">
        Where in the World?
      </h1>
      <div className="flex gap-x-3 items-center">
        <BsMoonFill size={15} />
        <p className="md:text-base text-sm font-semibold">Dark Mode</p>
      </div>
    </div>
  )
}

export default Navbar
