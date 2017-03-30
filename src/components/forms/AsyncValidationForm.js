import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000)
    .then(() => {
      throw { username: "Username doesn't exist" }
    })
}


@reduxForm({
  form: 'asyncValidation',
  asyncValidate,
  asyncBlurFields: [ 'username' ]
})
export default class AsyncValidationForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Async validation form</h1>
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
