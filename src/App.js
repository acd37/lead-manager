import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import PrivateRoute from './components/common/PrivateRoute';

// Redux
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';

// Components
import Header from './components/layout/Header';
import Dashboard from './components/leads/Dashboard';
import Alerts from './components/layout/Alerts';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';

// Alert Options
const opts = {
    timeout: 3000,
    position: 'bottom center'
};

const AlertTemplate = ({ style, options, message, close }) => (
    <div
        style={{
            backgroundColor: 'rgb(70,70,70)',
            margin: 24,
            padding: '14px 16px',
            color: 'rgba(255,255,255,.7)',
            borderRadius: 0,
            minWidth: 344,
            maxWidth: '33vw',
            minHeight: 48,
            fontSize: '0.875rem',
            lineHeight: '1.24rem',
            boxShadow:
                '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)'
        }}
    >
        {options.type === 'info' && (
            <span style={{ marginRight: 30, color: '#89a7e0' }}>
                <strong>INFO</strong>
            </span>
        )}
        {options.type === 'success' && (
            <span style={{ marginRight: 30, color: '#5aca75' }}>
                <strong>SUCCESS</strong>
            </span>
        )}
        {options.type === 'error' && (
            <span
                style={{ marginRight: 30, color: '#f48989', fontWeight: 700 }}
            >
                ERROR
            </span>
        )}
        {message}
    </div>
);

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...opts}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute
                                        exact
                                        path="/dashboard"
                                        component={Dashboard}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        component={Login}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}
export default App;
