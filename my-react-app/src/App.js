import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Sample component import
import SampleComponent from './SampleComponent';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            {/* Add more links here */}
          </ul>
        </nav>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Home />
      {/* Add more components or routes here */}
    </div>
  );
}

export default App;
