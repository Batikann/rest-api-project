import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Countries, CountriesState } from '../types'

const initialState: CountriesState = {
  countries: [],
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountries: (state, action: PayloadAction<Countries[]>) => {
      state.countries = action.payload
    },
  },
})

export default countriesSlice.reducer
export const { addCountries } = countriesSlice.actions
