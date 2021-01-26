import {
  PRODUCT_CATEGORY_ID_TSHIRTS,
  PRODUCT_CATEGORY_ID_SKIRTS
} from '../../../config/appConstants';
import { Routes } from '../../../config/routes';

export const useCategory = (currentRoute: Routes): number | null => {
  if (
    currentRoute !== Routes.SHOP_PAGE &&
    currentRoute !== Routes.TSHIRTS_CATEGORY_PAGE &&
    currentRoute !== Routes.SKIRTS_CATEGORY_PAGE
  ) {
    throw new Error('useCategory hook can only by used with /shop routes');
  }

  const mapShopRoutesToCategoryIds = new Map<Routes, number | null>([
    [Routes.SHOP_PAGE, null],
    [Routes.TSHIRTS_CATEGORY_PAGE, PRODUCT_CATEGORY_ID_TSHIRTS],
    [Routes.SKIRTS_CATEGORY_PAGE, PRODUCT_CATEGORY_ID_SKIRTS]
  ]);

  return mapShopRoutesToCategoryIds.get(currentRoute) as number | null;
};
