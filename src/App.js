import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Rules from './components/Rules';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;