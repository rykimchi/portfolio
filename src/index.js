import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers';
import pages from './pages';

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    })
);

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route exact path="/" component={pages.Home}/>

        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
