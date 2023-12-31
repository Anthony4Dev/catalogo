import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ selectedCategory }) => {

  const products = [
    {
      id: 1,
      name: 'Sutiã',
      price: 39.90,
      category: 'sutias',
      image: 'https://th.bing.com/th/id/R.a39607287fff38e155bbd2143ce55e6b?rik=KJTSQY6IxhACvg&pid=ImgRaw&r=0',
      description: 'Este é um sutiã confortável e elegante, perfeito para o dia a dia.',
    },
    {
      id: 2,
      name: 'Calcinha',
      price: 19.90, 
      category: 'lingeries', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_971684-MLB48848823458_012022-F.webp',
      description: "Esta calcinha é perfeita para o dia a dia",
    },
    {
      id: 3,
      name: 'Conjunto íntimo',
      price: 59.90, 
      category: 'conjuntos', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_766616-MLB47177416741_082021-F.jpg',
      description: "Um conjunto para a noite",
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-container">
      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-image" src={product.image} alt={product.name} />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">R$ {product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`} className="product-link">
            Ver detalhes
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
