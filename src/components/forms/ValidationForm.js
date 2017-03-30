import React from 'react'
import {RaisedButton} from 'material-ui'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {required, email} from '../common/validators'

function minLength(value) {
  return value && value.length > 3 ? undefined : 'username should be ateast 3 characters long'
}

function validate(values) {
  let errors = {}
  if (!(values.facebook || values.twitter)) {
    errors.facebook = errors.twitter = 'Either facebook or twitter handle should be filled'
  }
  return errors
}

@reduxForm({
  form: 'validation',
  validate,
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
          <div>
            <Field
              name='username'
              placeholder='User name'
              component={TextField}
              validate={[required, minLength]}
            />
          </div>
          <div>
            <Field
              name='email'
              placeholder='E-mail'
              component={TextField}
              validate={email}
            />
          </div>
          <div>
            <Field
              name='twitter'
              placeholder='Twitter Handle'
              component={TextField}
            />
          </div>
          <div>
            <Field
              name='facebook'
              placeholder='Facebook Id'
              component={TextField}
            />
          </div>
          <div>
            <RaisedButton type='submit' label="Submit" primary={true} />
          </div>
        </form>
      </div>
    )
  }
}
