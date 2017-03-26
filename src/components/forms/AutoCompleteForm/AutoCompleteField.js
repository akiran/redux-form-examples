import React from 'react';
import {AutoComplete} from 'material-ui';

export default class AutoCompleteField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
    this.onNewRequest = this.onNewRequest.bind(this);
    this.onUpdateInput = this.onUpdateInput.bind(this);
  }
  componentDidMount() {
    const {dataSource, dataSourceConfig, input} = this.props;
    const initialOption = dataSource.find(option => option[dataSourceConfig.value] === input.value )
    this.setState({
      searchText: initialOption && initialOption[dataSourceConfig.text]
    })
  }
  onNewRequest(option) {
    const {input, dataSourceConfig} = this.props;
    const value = option[dataSourceConfig.value];
    input.onChange(value);
  }
  onUpdateInput(searchText) {
    this.setState({
      searchText
    });
  }
  render() {
    const {input, meta, ...props} = this.props
    return (
      <AutoComplete
        {...props}
        searchText={this.state.searchText}
        onNewRequest={this.onNewRequest}
        onUpdateInput={this.onUpdateInput}
      />
    );
  }
}
