import './App.css';
import { useState } from 'react';

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
          <li className="items">item 1</li>
          <li className="items">item 2</li>
          <li className="items">item 3</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
