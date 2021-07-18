import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import image1 from './assets/Media/images/112.png'
import image2 from './assets/Media/images/11.png'
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
