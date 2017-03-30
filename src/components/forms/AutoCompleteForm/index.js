import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {AutoComplete} from 'material-ui'
import {connect} from 'react-redux'
import AutoCompleteField from './AutoCompleteField'

const dataSourceConfig = {
  text: 'name', value: 'id'
}

const dataSource = [
  {id: 1, name: 'john'},
  {id: 2, name: 'doe'},
  {id: 3, name: 'adam'},
  {id: 4, name: 'jane'}
]

@connect((state) => {
  return {
    initialValues: {
      user: 1
    }
  }
})
@reduxForm({
  form: 'autocomplete'
})
export default class AutoCompleteForm extends React.Component {
  render() {
    return (
      <div>
        <h1>AutoComplete example</h1>
        <Field
          id='autocomplete'
          name='user'
          component={AutoCompleteField}
          dataSource={dataSource}
          dataSourceConfig={dataSourceConfig}
          openOnFocus={true}
          filter={AutoComplete.caseInsensitiveFilter}
        />
      </div>
    )
  }
}
