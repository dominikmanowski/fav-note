import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';

const Root = () => (
  <MainTemplate>
    <Router>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
      <Link to="/">Notes</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/twitters">Twitters</Link>
    </Router>
  </MainTemplate>
);

export default Root;
