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
  amount: 0 // amount means the quantity in the cart
}

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  // clear all items from cart gets passed to the Provider (see below)
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  // remove single item from cart
  const removeItem = id => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  // increase cart quantity
  const increaseQuantity = id => {
    dispatch({ type: "INCREASE_ITEM", payload: id })
  }

  // decrease cart quantity
  const decreaseQuantity = id => {
    dispatch({ type: "DECREASE_ITEM", payload: id })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity
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
