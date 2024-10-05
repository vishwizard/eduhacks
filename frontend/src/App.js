import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardHome from './components/DashboardHome';
import GenerateTest from './components/GenerateTest';
import TestHistory from './components/TestHistory';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/generate-test" element={<GenerateTest />} />
              <Route path="/test-history" element={<TestHistory />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;






