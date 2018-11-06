import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContactListPage from '../contactListPage/ContactListPage';
import ContactDetailPage from '../contactDetailPage/ContactDetailPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import HomePage from '../homePage/HomePage';

const AppBody = () => (
  <div className={ 'app-body' }>
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Redirect from={ '/home' } to={ '/' } />
      <Route path="/contact-search" component={ ContactListPage } />
      <Route path="/contact-detail" component={ ContactDetailPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  </div>
);

export default AppBody;
