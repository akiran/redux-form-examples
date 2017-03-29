import React from 'react'
import {connect} from 'react-redux'
import InitializationForm from './InitializationForm'

@connect((state) => {
  return {
    initialValues: {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
})
export default class InitializationFormContainer extends React.Component {
  render() {
    return <InitializationForm {...this.props} />
  }
}
