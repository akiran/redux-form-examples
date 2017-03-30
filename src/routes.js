import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import SimpleForm from './components/forms/SimpleForm'
import AutoCompleteForm from './components/forms/AutoCompleteForm';
import InitializationFormContainer from './components/forms/Initialization/InitializationFormContainer'
import CustomEventsForm from './components/forms/CustomEventsForm'
const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SimpleForm} />
    <Route path='autocomplete' component={AutoCompleteForm} />
    <Route path='initialization' component={InitializationFormContainer} />
    <Route path='custom-events' component={CustomEventsForm} />
  </Route>
)

export default routes
