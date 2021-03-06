import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-xs-3">
            <List>
              <Link to='/'><ListItem primaryText="Simple" /></Link>
              <Link to='/field-array'><ListItem primaryText="Field Array" /></Link>
              <Link to='/autocomplete'><ListItem primaryText="Autocomplete" /></Link>
              <Link to='/initialization'><ListItem primaryText="Initialization" /></Link>
              <Link to='/validation'><ListItem primaryText="Validation" /></Link>
              <Link to='/async-validation'><ListItem primaryText="Async Validation" /></Link>
              <Link to='/custom-events'><ListItem primaryText="Custom Events" /></Link>
              <Link to='/field-sync'><ListItem primaryText="Field Sync" /></Link>
              <Link to='/reducer'><ListItem primaryText="Reducer" /></Link>
              <Link to='/selectors'><ListItem primaryText="Selectors" /></Link>
              <Link to='/actions'><ListItem primaryText="Actions" /></Link>
              <Link to='/format'><ListItem primaryText="Format" /></Link>
            </List>
          </div>
          <div className='col-xs-9'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
