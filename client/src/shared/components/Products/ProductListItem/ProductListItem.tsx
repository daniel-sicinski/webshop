import React from 'react';
import { IProduct } from '../../../../../../server/src/product/Product';
import productImg from '../../../../img/product.jpg';

interface ProductListItemProps {
  product: IProduct;
}

export const ProductListItem: React.FunctionComponent<ProductListItemProps> = ({
  product
}) => {
  return (
    <figure className="product-list-item">
      <div className="product-list-item__img-wrapper">
        <img
          className="product-list-item__img"
          src={productImg}
          alt={product.name}
        />
      </div>
      <figcaption className="product-list-item__details">
        <p className="product-list-item__name">{product.name}</p>
        <span className="product-list-item__price">
          {product.price + ' PLN'}
        </span>
      </figcaption>
    </figure>
  );
};
