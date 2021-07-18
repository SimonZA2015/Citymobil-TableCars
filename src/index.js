import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './assets/Store/Store'

store.dispatch({type: 'GET-INFO'})

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.observer(render)
