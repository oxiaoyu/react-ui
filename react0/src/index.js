import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import Other from './layout/Other';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
<HashRouter>
  <Switch>
    <Route path = '/detail' component = { Other } />
    <Route path = '/' component = { App } />
  </Switch>
</HashRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
