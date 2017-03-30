export default function fieldReducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PRODUCT': {
      const number = parseInt(action.number, 10)
      return {
        ...state,
        values: {
          ...state.values,
          product: number ? number*2 : null
        }
      }
    }
    default: return state
  }
}
