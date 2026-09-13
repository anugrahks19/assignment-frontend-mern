import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {location.pathname !== '/' && (
          <button 
            onClick={() => navigate(-1)} 
            className="back-button"
            aria-label="Go Back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <NavLink to="/">NexusHR</NavLink>
      </div>
      <div className="nav-links">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/analytics" 
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Analytics
        </NavLink>
        <NavLink 
          to="/employee-form" 
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Onboarding
        </NavLink>
        
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
