import { Routes } from '../../../config/routes';
import shopBackgroundImage from '../../../img/shop_landing_img.jpg';
import tshirtsCategoryBackgroundImage from '../../../img/tshirt_category_landing_img.png';

export const useDerivePageTitleAndImage = (
  pageRoute: Routes
): [string, string] => {
  let pageTitle = '';
  let backgrounImageUrl = '';

  switch (pageRoute) {
    case Routes.SHOP_PAGE:
      pageTitle = 'Shop';
      backgrounImageUrl = shopBackgroundImage;
      break;
    case Routes.SKIRTS_CATEGORY_PAGE:
      pageTitle = 'Skirts';
      backgrounImageUrl = shopBackgroundImage;
      break;
    case Routes.TSHIRTS_CATEGORY_PAGE:
      pageTitle = 'T-Shirts';
      backgrounImageUrl = tshirtsCategoryBackgroundImage;
      break;
  }

  return [pageTitle, backgrounImageUrl];
};
