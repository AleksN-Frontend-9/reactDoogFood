import { configureStore } from '@reduxjs/toolkit'
import { TOKEN_LS_KEY_A } from './constants'
import { getIniteState } from './initState'
import { cartReducer } from './slices/cartSlice'
import { favouriteReducer } from './slices/favouriteSlice'
import { filterReducer } from './slices/filterSlice'
import { userReducer } from './slices/userSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
  },
  preloadedState: getIniteState(),
})

console.log('Рендерится store')
console.log(store.getState())

store.subscribe(() => {
  window.localStorage.setItem(TOKEN_LS_KEY_A, JSON.stringify(store.getState()))
})
