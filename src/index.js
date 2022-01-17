import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*создаем JSX-компоненту, из которой App получит весь стор */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


reportWebVitals();
