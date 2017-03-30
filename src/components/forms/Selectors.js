import React, {Component} from 'react'
import {Field, reduxForm, formValueSelector, getFormValues, getFormSyncErrors} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {connect} from 'react-redux'
import {RaisedButton} from 'material-ui'
import {required} from '../common/validators'

@connect((state, {form}) => {
  return {
    formValues: getFormValues(form)(state),
    syncErrors: getFormSyncErrors(form)(state)
  }
})
class UserCheck extends React.Component {
  render() {
    console.log('user check', this.props)
    return (
      <div>
      </div>
    )
  }
}

@connect((state, {form}) => {
  return {
    firstName: formValueSelector(form)(state, 'firstName'),
  }
})
@reduxForm()
export class Selectors extends Component {
  render() {
    const {handleSubmit} = this.props
    console.log(this.props.syncErrors1)
    return (
      <div>
        <h3>Selectors</h3>
        <form onSubmit={handleSubmit(() => {})}>
          <Field
            name='firstName'
            component={TextField}
            placeholder='First name'
            validate={required}
          />
          <Field
            name='lastName'
            component={TextField}
            placeholder='Last name'
            validate={required}
          />
          <RaisedButton type='submit' label="Submit" />
          <div>
            {this.props.firstName}
          </div>
        </form>
      </div>
    )
  }
}

export default function Example() {
  const form = 'selectorExample'
  return (
    <div>
      <Selectors form={form} />
      <UserCheck form={form} />
    </div>
  )
}
