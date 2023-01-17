const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: []
    }
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
    }
  }

  // the default state
  return state
}

export default reducer
