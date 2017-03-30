import React from 'react'
import {RaisedButton} from 'material-ui'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {required} from '../common/validators'

function minLength(value) {
  return value && value.length > 3 ? undefined : 'username should be ateast 3 characters long'
}

@reduxForm({
  form: 'validation',
  onSubmit: function (values) {
    console.log(values, 'submit')
  }
})
export default class ValidationForm extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h1>Validation form</h1>
        <form onSubmit={handleSubmit}>
          <Field
            name='username'
            placeholder='User name'
            component={TextField}
            validate={[required, minLength]}
          />
          <div>
            <RaisedButton type='submit' label="Submit" primary={true} />
          </div>
        </form>
      </div>
    )
  }
}
