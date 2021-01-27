import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './config/routes';
import ContactPageComponent from './pages/ContactPage/components/ContactPageComponent';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { AppNavbar } from './shared/components/AppNavbar/AppNavbar';
import { AppFooter } from './shared/components/AppFooter/AppFooter';
import { IndexPage } from './pages/IndexPage/IndexPage';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path={Routes.INDEX_PAGE} component={IndexPage}></Route>
        <Route path={Routes.SHOP_PAGE} component={ShopPage}></Route>
        <Route
          exact
          path={Routes.CONTACT_PAGE}
          component={ContactPageComponent}
        ></Route>
      </Switch>
      <AppFooter />
    </Router>
  );
};
