import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoList from './Components/ToDoList';
import Contact from './Components/Contact';
import './App.css';

<nav>
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/contact" className="nav-link">Contact</Link>
</nav>


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

