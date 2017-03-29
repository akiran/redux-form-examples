import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-xs-3">
            <List>
              <Link to='/'><ListItem primaryText="Simple" /></Link>
              <Link to='/autocomplete'><ListItem primaryText="Autocomplete" /></Link>
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

export default App;
