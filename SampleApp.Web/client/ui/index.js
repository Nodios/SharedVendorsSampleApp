import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';

ReactDOM.render(
    <Provider rootStore={window.app.app.rootStore}>
        <App />
    </Provider>,
    document.getElementById('react-container')
);