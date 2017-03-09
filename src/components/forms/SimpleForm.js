import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

@reduxForm({
  form: 'simple'
})
export default class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple form</h1>
        <form>
          <Field
            name='username'
            placeholder='User name'
            component={TextField}
          />
        </form>
      </div>
    )
  }
}
