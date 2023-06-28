import React from 'react';
import ProductDetail from './ProductDetail';

function ProductListing({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;
