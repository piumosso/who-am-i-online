import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './com/Index';
import Play from './Play';


export default () => <Router>
  <Route path="/" exact component={Index} />
  <Route path="/:play/" exact component={Play} />
</Router>;
