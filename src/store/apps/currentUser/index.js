import { createSlice } from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: null,
  reducers: {
    setCurrentUser: (state, action) => action.payload,
    clearCurrentUser: () => null
  }
})

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer
