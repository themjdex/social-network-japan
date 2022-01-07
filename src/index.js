import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, subscribe, updateNewPostText } from './redux/state';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state);
reportWebVitals();
subscribe(rerenderEntireTree);
