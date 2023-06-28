import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
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
            <li className="items">Lingeries</li>
            <li className="items">Conjuntos</li>
            <li className="items">Sutiãs</li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
