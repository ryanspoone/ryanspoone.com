import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/normalize.css';
import './styles/App.css';
import './styles/Home.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/NotFound.css';
import './styles/SocialSidebar.css';
import './styles/EmailSidebar.css';
import './styles/Intro.css';
import './styles/About.css';
import './styles/Experience.css';
import './styles/Work.css';
import './styles/Contact.css';
import './styles/Archive.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
