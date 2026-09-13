import React from 'react';

const Analytics = () => {
  return (
    <div className="container">
      <h1 className="page-title">Analytics Overview</h1>
      <p className="page-subtitle">Key metrics and insights for your organization.</p>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Total Employees</div>
          <div className="stat-value">1,248</div>
          <div className="stat-trend positive">↑ 12% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Active Departments</div>
          <div className="stat-value">24</div>
          <div className="stat-trend neutral">Same as last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Avg Onboarding Time</div>
          <div className="stat-value">4.2 days</div>
          <div className="stat-trend positive">↓ 0.5 days from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Retention Rate</div>
          <div className="stat-value">94%</div>
          <div className="stat-trend negative">↓ 2% from last month</div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container large">
          <h3 className="chart-title">Headcount Growth</h3>
          <div className="chart-placeholder line-chart">
            {/* Visual representation of a line chart */}
            <svg viewBox="0 0 100 50" className="chart-svg">
              <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,20 L60,25 L70,10 L80,15 L90,5 L100,0" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
              <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,20 L60,25 L70,10 L80,15 L90,5 L100,0 L100,50 L0,50" fill="url(#chartGradient)" stroke="none" opacity="0.3" />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="chart-container small">
          <h3 className="chart-title">Department Distribution</h3>
          <div className="chart-placeholder donut-chart">
            <div className="donut-inner">
              <span>Engineering</span>
              <span className="donut-value">42%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
