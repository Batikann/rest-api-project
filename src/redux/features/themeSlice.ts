import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const theme =
  localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')
    : 'dark'

type Theme = {
  theme: string | null
}

const initialState: Theme = {
  theme: theme,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    },
  },
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions
