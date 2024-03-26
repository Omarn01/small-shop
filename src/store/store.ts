import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice'
import {
  PersistConfig,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { IProduct } from '../types/product.interface'

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
}

const rootReducer: Reducer = combineReducers({
  cart: cartSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
export { cartSlice }
