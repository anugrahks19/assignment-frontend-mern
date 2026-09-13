import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setEmployee(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch employee", error);
        setLoading(false);
      }
    };
    
    fetchEmployee();
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>
          ← Back to Dashboard
        </button>
        <div className="loader-container">
          <div className="spinner"></div>
          <div>Loading employee details...</div>
        </div>
      </div>
    );
  }

  if (!employee || !employee.name) {
    return (
      <div className="container">
        <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>
          ← Back
        </button>
        <h2>Employee not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>
        ← Back to Dashboard
      </button>

      <div className="employee-detail-card">
        <div className="detail-header-large">
          <div className="avatar large">
            {employee.name.charAt(0)}
          </div>
          <div className="title-group">
            <h1 className="page-title">{employee.name}</h1>
            <p className="page-subtitle" style={{ marginBottom: '1rem' }}>{employee.company?.name || 'NexusHR Team'}</p>
            <span className="status-active">Active Employee</span>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-section">
            <h3>Contact Information</h3>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{employee.email.toLowerCase()}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{employee.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Website:</span>
              <span className="detail-value">{employee.website}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Location Details</h3>
            <div className="detail-row">
              <span className="detail-label">Street:</span>
              <span className="detail-value">{employee.address?.street}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">City:</span>
              <span className="detail-value">{employee.address?.city}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Zipcode:</span>
              <span className="detail-value">{employee.address?.zipcode}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
