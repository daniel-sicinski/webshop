import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../config/routes';

export const AppNavbar: React.FunctionComponent = () => {
  return (
    <header className="app-navbar">
      <div></div>
      <nav className="app-navbar__nav">
        <Link className="app-navbar__link" to={Routes.INDEX_PAGE}>
          Start
        </Link>
        <Link
          className="app-navbar__link app-navbar__link--shop"
          to={Routes.SHOP_PAGE}
        >
          Shop
        </Link>
        <div className="app-navbar__categories-links">
          <Link
            className="app-navbar__category-link"
            to={Routes.SKIRTS_CATEGORY_PAGE}
          >
            Skirts
          </Link>
          <Link
            className="app-navbar__category-link"
            to={Routes.TSHIRTS_CATEGORY_PAGE}
          >
            T-Shirts
          </Link>
        </div>
        <Link className="app-navbar__link-logo" to={Routes.INDEX_PAGE}>
          Webshop
        </Link>
        <Link className="app-navbar__link" to={Routes.CONTACT_PAGE}>
          About
        </Link>
        <Link className="app-navbar__link" to={Routes.CONTACT_PAGE}>
          Contact
        </Link>
      </nav>
      <div></div>
    </header>
  );
};
