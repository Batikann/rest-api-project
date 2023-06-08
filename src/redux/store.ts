import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { countriesSlice } from './features/countriesSlice'

export const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
  },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector
