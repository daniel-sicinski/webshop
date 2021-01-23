import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./config/routes";
import IndexPageComponent from "./pages/IndexPage/components/IndexPageComponent";
import ShopPageComponent from "./pages/ShopPage/components/ShopPageComponent";
import ContactPageComponent from "./pages/ContactPage/components/ContactPageComponent";
import HeaderComponent from "./shared/features/Header/components/HeaderComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route
          exact
          path={Routes.INDEX_PAGE}
          component={IndexPageComponent}
        ></Route>
        <Route
          exact
          path={Routes.SHOP_PAGE}
          component={ShopPageComponent}
        ></Route>
        <Route
          exact
          path={Routes.CONTACT_PAGE}
          component={ContactPageComponent}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
