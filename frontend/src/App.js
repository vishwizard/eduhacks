import React from 'react';
// import './Sidebar.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardHome from './components/DashboardHome';
import GenerateTest from './components/GenerateTest';
import TestHistory from './components/TestHistory';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/generate-test" element={<GenerateTest />} />
          <Route path="/test-history" element={<TestHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





