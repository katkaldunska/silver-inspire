import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './app/App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
