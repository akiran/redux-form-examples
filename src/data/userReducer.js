
const intialState = {
  data: {
    firstName: 'John',
    lastName: 'Doe'
  },
  loaded: true
}

export default function userReducer(state=intialState, action) {
  switch(action.type) {
    default: return state
  }
}