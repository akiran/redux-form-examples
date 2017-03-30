import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers();

import { reducer as formReducer } from 'redux-form'
import fieldReducer from './fieldReducer'

const reducers = {
  form: formReducer.plugin({
    reducerFormExample: fieldReducer
  })
}
const reducer = combineReducers(reducers)
const store = createStore(reducer, enhancer)

export default store
