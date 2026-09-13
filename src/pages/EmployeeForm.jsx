import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission visually
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', designation: '', location: '', salary: '' });
    }, 3000);
  };

  return (
    <div className="container">
      <h1 className="page-title">Employee Onboarding</h1>
      <p className="page-subtitle">Register new personnel to the company directory.</p>
      
      <div className="form-container">
        {submitted ? (
          <div style={{ textAlign: 'center', color: '#10b981', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Success!</h2>
            <p>Employee has been added to the system.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="designation">Designation</label>
              <input 
                type="text" 
                id="designation" 
                name="designation" 
                className="form-input" 
                placeholder="e.g. Senior Developer"
                value={formData.designation}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                className="form-input" 
                placeholder="e.g. New York, NY"
                value={formData.location}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="salary">Salary ($)</label>
              <input 
                type="number" 
                id="salary" 
                name="salary" 
                className="form-input" 
                placeholder="e.g. 85000"
                value={formData.salary}
                onChange={handleChange}
                required 
              />
            </div>
            
            <button type="submit" className="btn-submit">
              Register Employee
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
