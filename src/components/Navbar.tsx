import { BsMoon, BsSunFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { changeTheme } from '../redux/features/themeSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.theme)

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className="navbar">
      <h1 className="navbar-header">Where in the World?</h1>
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
          <p className="navbar-title">Dark Mode</p>
        ) : (
          <p className="navbar-title">Light Mode</p>
        )}
      </div>
    </div>
  )
}

export default Navbar
