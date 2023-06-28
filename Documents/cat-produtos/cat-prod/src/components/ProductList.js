import React from 'react';

const ProductList = () => {
  // Dados de exemplo (pode ser substituído por uma chamada à API)
  const products = [
    { id: 1, name: 'Sutiã', price: 39.90, image: 'https://th.bing.com/th/id/R.a39607287fff38e155bbd2143ce55e6b?rik=KJTSQY6IxhACvg&pid=ImgRaw&r=0' },
    { id: 2, name: 'Calcinha', price: 19.90, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_971684-MLB48848823458_012022-F.webp' },
    // Adicione mais produtos aqui...
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img className="product-image" src={product.image} alt={product.name} />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">R$ {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
