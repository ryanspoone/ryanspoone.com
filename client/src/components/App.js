import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';
import NotFound from './NotFound';

const App = () => (
    <div className="layout">
        <Header />
        <SocialSidebar />
        <EmailSidebar />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>

        <Footer />
    </div>
);

export default App;
