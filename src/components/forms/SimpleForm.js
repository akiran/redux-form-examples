import React from 'react'
import {reduxForm} from 'redux-form'

@reduxForm({
  name: 'simple'
})
export default class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple form</h1>

      </div>
    )
  }
}
