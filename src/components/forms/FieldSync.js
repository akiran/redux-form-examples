import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

@reduxForm({
  form: 'fieldSync'
})
export default class FieldSync extends React.Component {
  changeHandler = (e) => {
    const number = parseInt(e.target.value, 10)
    this.props.change('product', number ? number * 2 : null)
  }
  render() {
    return (
      <div>
        <h3>Field Sync</h3>
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
