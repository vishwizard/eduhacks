import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/generate-test">Generate Test</Link></li>
        <li><Link to="/test-history">Test History</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
