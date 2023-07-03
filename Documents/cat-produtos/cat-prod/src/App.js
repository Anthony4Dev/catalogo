import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleNavItemClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRemoveFilter = () => {
    setSelectedCategory('');
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Catálogo</h1>
      </header>
      <Router>
        <nav id="navbar" className={isNavExpanded ? 'expanded' : ''}>
          <button className="nav-toggle" onClick={toggleNav}>
            Menu
          </button>
          <ul id="nav-items" className={!isNavExpanded ? 'nav-closed' : ''}>
            <li className="items" onClick={() => handleNavItemClick('lingeries')}>
              Lingeries
            </li>
            <li className="items" onClick={() => handleNavItemClick('conjuntos')}>
              Conjuntos
            </li>
            <li className="items" onClick={() => handleNavItemClick('sutias')}>
              Sutiãs
            </li>
            <li className="items cart-button" onClick={toggleCart}>
              Carrinho
            </li>
          </ul>
        </nav>
        {selectedCategory && (
          <div className="selected-category">
            Filtro aplicado: {selectedCategory.replace(/%7E/g, '~').charAt(0).toUpperCase() + selectedCategory.slice(1)}
            <button className="remove-filter" onClick={handleRemoveFilter}>
              Remover Filtro
            </button>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={<ProductList selectedCategory={selectedCategory} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
