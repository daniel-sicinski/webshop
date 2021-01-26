import React from 'react';
import { Routes } from '../../../../config/routes';
import { useDerivePageTitleAndImage } from '../../hooks/useDerivePageTitleAndImage';

interface ShopHeaderComponentProps {
  route: Routes;
}

export const ShopHeader: React.FunctionComponent<ShopHeaderComponentProps> = ({
  route
}) => {
  const [pageTitle, backgrounImageUrl] = useDerivePageTitleAndImage(route);
  const backgroundImage = `linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${backgrounImageUrl})`;

  return (
    <header className="shop-header" style={{ backgroundImage }}>
      <h1 className="shop-header__title">{pageTitle}</h1>
    </header>
  );
};
