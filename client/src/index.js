import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
import './styles/Projects.css';
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

// Change to .register() to use it.
serviceWorker.unregister();
