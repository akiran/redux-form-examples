import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

function addDollar(value) {
  if (!value || value.startsWith('$')) {
    return ''
  } else {
    return '$' + value
  }
}

function parseNumber(value) {
  const number = value.replace(/[^\d\.]/g, "") // remove non numeric characters
                      .replace(/\./, "x") // 3 regex statments to keep only one dot
                      .replace(/\./g, "")
                      .replace(/x/, ".");
  // restrict floating point number to 2 decimal places
  return (/^\d+\.\d\d\d$/).test(number) ? parseFloat(number).toFixed(2) : number
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
            normalize={parseNumber}
          />
        </form>
      </div>
    )
  }
}
