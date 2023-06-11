import { HomeShowCase } from '../components/HomeShowCase'
import Navbar from '../components/Navbar'

export const Home = () => {
  return (
    <div className="text-sm bg-v-dark-blue dark:bg-white min-h-screen">
      <Navbar />
      <HomeShowCase />
    </div>
  )
}
