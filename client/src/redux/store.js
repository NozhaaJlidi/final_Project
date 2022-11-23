import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import voyageSlice from './voyageSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    voyage:voyageSlice
  },
})