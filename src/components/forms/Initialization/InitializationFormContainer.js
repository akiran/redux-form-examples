import React from 'react'
import {connect} from 'react-redux'
import InitializationForm from './InitializationForm'

function Loading() {
  return <div>Loading ...</div>
}

@connect((state) => {
  return {
    initialValues: state.user.data,
    loaded: state.user.loaded
  }
})
export default class InitializationFormContainer extends React.Component {
  render() {
    const {loaded} = this.props
    return loaded ? <InitializationForm {...this.props} /> : <Loading />
  }
}
