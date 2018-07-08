import React from 'react';
import { BrowserRouter as Router }  from 'react-router-dom';
import { render } from 'react-dom';
import './style/index.css';
import 'typeface-roboto';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import  { configureStore } from './store/configureStore';
import { saveState } from './store/localStorage';

const store = configureStore();

store.subscribe(() => {
    saveState({
        userState: store.getState().userState
    })
});

const renderApp = () => render(
    <Router>
        <Root store={store}/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

renderApp();