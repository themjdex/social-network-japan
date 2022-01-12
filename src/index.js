import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState());
reportWebVitals();
store.subscribe(rerenderEntireTree);
