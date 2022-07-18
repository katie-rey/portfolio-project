import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      console.log(action.payload)
      state.value = action.payload
      console.log(state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
