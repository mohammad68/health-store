import { configureStore } from '@reduxjs/toolkit'
import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux'
import cartSlice from './slices/cartSlice'



const store = configureStore({ reducer: {
    cart: cartSlice,
}})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;