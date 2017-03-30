import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

@reduxForm({
  form: 'customEvents'
})
export default class CustomEventsForm extends React.Component {
  changeHandler = (e) => {
    console.log(e)
  }
  blurHandler = (e) => {
    console.log('blur', e)
  }
  render() {
    return (
      <div>
        <h1>Custom Events</h1>
        <form>
          <Field
            name='username'
            placeholder='User name'
            component={TextField}
            onChange={this.changeHandler}
            onBlur={this.blurHandler}
          />
        </form>
      </div>
    )
  }
}
