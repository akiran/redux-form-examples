import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

@reduxForm({
  form: 'customEvents'
})
export default class CustomEventsForm extends React.Component {
  changeHandler = (e) => {
    // e.preventDefault()
    this.props.change('username', e.target.value)
    console.log(e.target.value)
  }
  blurHandler = (e) => {
    e.preventDefault()
    this.props.blur(e)
    console.log('blur')
  }
  render() {
    return (
      <div>
        <h1>Custom Events</h1>
        <form>
          <Field
            id='customEvents'
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
