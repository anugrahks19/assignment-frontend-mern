import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch employees", error);
        setLoading(false);
      }
    };
    
    // Simulate a slight delay for smooth entry animation
    setTimeout(fetchEmployees, 500);
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h1 className="page-title">Employee Dashboard</h1>
        <p className="page-subtitle">Overview of all active personnel.</p>
        <div className="loader-container">
          <div className="spinner"></div>
          <div>Loading system data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Employee Dashboard</h1>
      <p className="page-subtitle">Overview of all active personnel.</p>
      
      <div className="employee-grid">
        {employees.map(employee => (
          <div 
            key={employee.id} 
            className="employee-card" 
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/employee/${employee.id}`)}
          >
            <div className="card-header">
              <div className="avatar">
                {employee.name.charAt(0)}
              </div>
              <div className="card-info">
                <h3>{employee.name}</h3>
                <p>ID: EMP-{employee.id.toString().padStart(4, '0')}</p>
              </div>
            </div>
            
            <div className="card-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{employee.email.toLowerCase()}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="status-active">Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
