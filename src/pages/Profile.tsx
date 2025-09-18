import React from 'react';
import { Button } from '../components/ui/Button/Button';
import { Input } from '../components/ui/Input/Input';

export function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>Manage your profile settings and preferences.</p>
      
      <div style={{ marginTop: '2rem', maxWidth: '400px' }}>
        <h2>Personal Information</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            defaultValue="John Doe"
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            defaultValue="john@example.com"
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Enter your phone number"
          />
          <div style={{ marginTop: '1rem' }}>
            <Button type="submit">Save Changes</Button>
            <Button variant="ghost" style={{ marginLeft: '1rem' }}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
