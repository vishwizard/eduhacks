// src/components/DashboardHome.js
import React from 'react';
import './DashboardHome.css';

const DashboardHome = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-header">Welcome to Test Preparation</h2>
      <div className="card">
        <h3 className="card-title">Test Generation</h3>
        <p className="card-content">Generate personalized test questions.</p>
      </div>
      <div className="card">
        <h3 className="card-title">Test History</h3>
        <p className="card-content">View your past tests and performance.</p>
      </div>
    </div>
  );
};

export default DashboardHome;
