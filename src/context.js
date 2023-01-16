import React, { useState, useContext, useReducer, useEffect } from "react"
import cartItems from "./data"
import reducer from "./reducer"

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project"
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0, // amount means the quantity in the cart
}

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  // clear all items from cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure you use, useGlobalContext
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
