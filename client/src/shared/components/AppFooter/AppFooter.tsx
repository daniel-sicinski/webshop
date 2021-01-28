import React from 'react';
import { Routes } from '../../../config/routes';
import { Link } from 'react-router-dom';

export const AppFooter: React.FunctionComponent = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__divider"></div>
      <div className="app-footer__site-info">
        <div>
          <h5 className="label">Info</h5>
          <ul className="app-footer__links">
            <li>
              <Link className="link" to={Routes.INDEX_PAGE}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="link" to={Routes.INDEX_PAGE}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="link" to={Routes.INDEX_PAGE}>
                Delivery & Payments
              </Link>
            </li>
            <li>
              <Link className="link" to={Routes.INDEX_PAGE}>
                Returns
              </Link>
            </li>
            <li>
              <Link className="link" to={Routes.INDEX_PAGE}>
                Complaints
              </Link>
            </li>
          </ul>
        </div>
        <div className="app-footer__contact">
          <h5 className="label">Contact</h5>
          <address>
            <p>
              <span className="text-bold">Phone:</span> 123 456 789
            </p>
            <p>
              <span className="text-bold">E-mail:</span> web@shop.com
            </p>
          </address>
        </div>
      </div>
      <div className="app-footer__divider"></div>
      <div className="app-footer__copyright">
        <p>©2021 WEBSHOP Made by: DS</p>
      </div>
    </footer>
  );
};
