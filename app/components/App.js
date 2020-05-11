import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Index';
import RedirectToPlay from './RedirectToGame';
import Play from './Game';
import Layout from './Layout';


export default () => <Router>
  <Layout>
    <Route path="/" exact component={Index} />
    <Route path="/:gameId/" exact component={RedirectToPlay} />
    <Route path="/:gameId/:playerId/" exact component={Play} />
  </Layout>
</Router>;
