import React from 'react'
import {reduxForm, Field, FieldArray} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {RaisedButton} from 'material-ui'

function renderUser(member, index, fields) {
  return (
    <div key={index}>
      <Field
        name={`${member}.firstName`}
        placeholder='First name'
        component={TextField}
      />
      <Field
        name={`${member}.lastName`}
        placeholder='Last name'
        component={TextField}
      />
      <RaisedButton label='Delete' onClick={() => fields.remove(index)}/>
    </div>
  )
}

class Users extends React.Component {
  addUser = () => {
    this.props.fields.push({})
  }
  render() {
    const {fields} = this.props
    return (
      <div>
        {fields.map(renderUser)}
        <div>
          <RaisedButton label='Add User' onClick={this.addUser} />
        </div>
      </div>
    )
  }
}

@reduxForm({
  form: 'array'
})
export default class FieldArraysForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Field Array</h1>
        <form>
          <FieldArray
            name='users'
            component={Users}
          />
        </form>
      </div>
    )
  }
}
