import { CountryDetails } from './pages/CountryDetails'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<CountryDetails />} />
      </Routes>
    </>
  )
}

export default App
