import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Modernize Your HR <br />
            <span className="text-gradient">Experience</span>
          </h1>
          <p className="hero-subtitle">
            NexusHR brings a beautiful, fast, and intuitive experience to your team management. Streamline onboarding, manage employees, and gain insights instantly.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>
            <button className="btn-secondary" onClick={() => navigate('/employee-form')}>
              Onboard Employee
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="visual-body">
              <div style={{ marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Team Activity</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Live updates from your workspace</p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ flex: 1, padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Active Now</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>24</div>
                </div>
                <div style={{ flex: 1, padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Pending tasks</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-primary)' }}>7</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div className="avatar" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>JD</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>John Doe</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--success-color)', fontWeight: '500' }}>Completed Onboarding</div>
                </div>
              </div>
            </div>
          </div>
          <div className="visual-decoration decoration-1"></div>
          <div className="visual-decoration decoration-2"></div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Premium Aesthetics</h3>
          <p>A beautiful interface that delights your team and improves productivity.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Lightning Fast</h3>
          <p>Optimized performance ensures you get things done without waiting.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Smart Insights</h3>
          <p>Make data-driven decisions with built-in analytics and reporting tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
