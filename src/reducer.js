const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: []
    }
  }

  // the default state
  return state
}

export default reducer
