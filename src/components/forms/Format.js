import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

function addDollar(value) {
  if (!value || value.startsWith('$')) {
    return value
  } else {
    return '$' + value
  }
}

function stripDollar(value) {
  if (!value) {
    return value
  } else {
    return value.replace('$', '')
  }
}

@reduxForm({
  form: 'format'
})
export default class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Format form</h3>
        <form>
          <Field
            name='amount'
            placeholder='Amount'
            component={TextField}
            format={addDollar}
            normalize={stripDollar}
          />
        </form>
      </div>
    )
  }
}
