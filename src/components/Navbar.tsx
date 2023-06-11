import { useEffect } from 'react'
import { BsMoon, BsSunFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { changeTheme } from '../redux/features/themeSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.theme)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="flex justify-between py-8 lg:px-12 px-6 items-center bg-dark-blue text-white dark:bg-white shadow-shadow-bottom">
      <h1 className="lg:text-xl text-base md:text-lg font-extrabold dark:text-dark-blue">
        Where in the World?
      </h1>
      <div
        className="flex gap-x-3 items-center cursor-pointer"
        onClick={() =>
          dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))
        }
      >
        {theme === 'dark' ? (
          <BsMoon className="text-dark-blue" size={18} />
        ) : (
          <BsSunFill size={18} />
        )}
        {theme === 'dark' ? (
          <p className="md:text-base text-sm font-semibold dark:text-dark-blue">
            Dark Mode
          </p>
        ) : (
          <p className="md:text-base text-sm font-semibold dark:text-dark-blue">
            Light Mode
          </p>
        )}
      </div>
    </div>
  )
}

export default Navbar
