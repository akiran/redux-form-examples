import React from 'react';
import ReactDOM from 'react-dom';
import store from './data/store';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider
      store={store}
    >
      <Router routes={routes} history={browserHistory} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
