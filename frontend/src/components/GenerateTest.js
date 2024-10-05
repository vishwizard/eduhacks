import React, { useState } from 'react';

const GenerateTest = () => {
  const [formData, setFormData] = useState({
    subject: '',
    topics: '',
    examDate: '',
    difficulty: 'easy'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your API for generating the test
    console.log('Form submitted', formData);
  };

  return (
    <div className="generate-test">
      <h2>Generate a New Test</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
        </label>
        <label>
          Topics:
          <input type="text" name="topics" value={formData.topics} onChange={handleInputChange} />
        </label>
        <label>
          Exam Date:
          <input type="date" name="examDate" value={formData.examDate} onChange={handleInputChange} />
        </label>
        <label>
          Difficulty Level:
          <select name="difficulty" value={formData.difficulty} onChange={handleInputChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button type="submit">Generate Test</button>
      </form>
    </div>
  );
};

export default GenerateTest;
