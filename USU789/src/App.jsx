import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container font-sans bg-background text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
