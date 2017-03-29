import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import SimpleForm from './components/forms/SimpleForm'
import AutoCompleteForm from './components/forms/AutoCompleteForm';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SimpleForm} />
    <Route path='autocomplete' component={AutoCompleteForm} />
  </Route>
)

export default routes