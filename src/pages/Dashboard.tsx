import React from 'react';
import { Button } from '../components/ui/Button/Button';

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! This is a protected route that would typically require authentication.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Button>Create New</Button>
          <Button variant="outline">View Reports</Button>
          <Button variant="ghost">Settings</Button>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Recent Activity</h2>
        <p>No recent activity to display.</p>
      </div>
    </div>
  );
}
