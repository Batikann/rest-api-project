import { HomeShowCase } from '../components/HomeShowCase'
import Navbar from '../components/Navbar'

export const Home = () => {
  return (
    <div className="text-sm bg-v-dark-blue min-h-screen">
      <Navbar />
      <HomeShowCase />
    </div>
  )
}
