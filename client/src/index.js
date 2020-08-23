import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker.js';
import App from './components/App.js';
import './styles/normalize.css';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// Change to .register() to use it.
serviceWorker.unregister();
