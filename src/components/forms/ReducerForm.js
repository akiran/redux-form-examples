import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

@reduxForm({
  form: 'reducerFormExample'
})
export default class FieldSync extends React.Component {
  changeHandler = (e) => {
    this.props.dispatch({
      type: 'UPDATE_PRODUCT',
      number: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>Reducer</h3>
        <form>
          <Field
            name='number'
            placeholder='Number'
            component={TextField}
            onChange={this.changeHandler}
          />
          <Field
            name='product'
            placeholder='Product'
            component={TextField}
          />
        </form>
      </div>
    )
  }
}
