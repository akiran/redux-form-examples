import React from 'react'
import {reduxForm, Field, submit} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {RaisedButton} from 'material-ui'


@reduxForm({
  form: 'actions',
  onSubmit: function(values) {
    console.log('values', values)
  }
})
export default class ActionsForm extends React.Component {
  invokeSubmit = () => {
    const {form} = this.props
    this.props.dispatch(submit(form))
  }
  render() {
    return (
      <div>
        <h3>Actions</h3>
        <form>
          <Field
            name='firstName'
            placeholder='First name'
            component={TextField}
          />
          <RaisedButton label='Next' onClick={this.invokeSubmit} />
        </form>
      </div>
    )
  }
}
