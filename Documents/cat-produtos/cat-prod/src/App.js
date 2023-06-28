import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
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
      <ProductList/>
    </div>
  );
}

export default App;
