import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: 'Sutiã',
      price: 39.90,
      category: 'sutias',
      image: 'https://th.bing.com/th/id/R.a39607287fff38e155bbd2143ce55e6b?rik=KJTSQY6IxhACvg&pid=ImgRaw&r=0',
      description: 'Este é um sutiã confortável e elegante, perfeito para o dia a dia.',
    },
    { id: 2, name: 'Calcinha', price: 19.90, category: 'lingeries', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_971684-MLB48848823458_012022-F.webp', description: 'Esta é uma calcinha confortável e elegante, perfeito para o dia a dia.' },
    // Adicione mais produtos aqui...
  ];

  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <Link to="/" className="back-link">Voltar</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
