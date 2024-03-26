import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './types'
import { IProduct } from '../types/product.interface'

const initialState: IInitialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.items = [...state.items, action.payload]
    },
    removeInCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product: IProduct) => product.id !== action.payload
      )
    },
  },
})
