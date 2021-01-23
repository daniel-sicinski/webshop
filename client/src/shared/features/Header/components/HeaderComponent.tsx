import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../../config/routes";

export default class HeaderComponent extends Component {
  render() {
    return (
      <nav>
        <Link to={Routes.INDEX_PAGE}>Start</Link>
        <Link to={Routes.SHOP_PAGE}>Shop</Link>
        <Link to={Routes.CONTACT_PAGE}>Contact</Link>
      </nav>
    );
  }
}
