import React from 'react';
import ProductDetail from './ProductDetail';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;
