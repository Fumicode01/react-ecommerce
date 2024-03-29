import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import createStore from './redux/store/store';
import App from './App';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './assets/theme'

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

