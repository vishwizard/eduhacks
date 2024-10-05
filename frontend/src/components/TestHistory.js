import React from 'react';

const TestHistory = () => {
  const testHistory = [
    { subject: 'Math', topics: 'Algebra, Calculus', date: '2024-10-01', difficulty: 'Hard' },
    { subject: 'Physics', topics: 'Mechanics', date: '2024-09-25', difficulty: 'Medium' },
  ];

  return (
    <div className="test-history">
      <h2>Test History</h2>
      <ul>
        {testHistory.map((test, index) => (
          <li key={index}>
            <strong>Subject:</strong> {test.subject} | 
            <strong> Topics:</strong> {test.topics} | 
            <strong> Date:</strong> {test.date} | 
            <strong> Difficulty:</strong> {test.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestHistory;
