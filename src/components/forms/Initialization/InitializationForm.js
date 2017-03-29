import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

@reduxForm({
  form: 'initialization'
})
export default class InitializationForm extends React.Component {
  render() {
    return (
      <form>
        <div>
           <Field
             name='firstName'
             component={TextField}
             placeholder='First name'
           />
        </div>
        <div>
           <Field
             name='lastName'
             component={TextField}
             placeholder='Last name'
           />
       </div>
      </form>
    )
  }
}
