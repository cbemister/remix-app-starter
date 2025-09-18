import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';

export function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      // In a real app, you would handle authentication here
      alert('Login functionality not implemented yet!');
    }, 2000);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '400px',
        padding: '2rem',
        backgroundColor: 'var(--color-background-secondary)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>Sign In</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Welcome back! Please sign in to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
            fullWidth
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            fullWidth
          />
          
          <div style={{ marginTop: '1rem' }}>
            <Button 
              type="submit" 
              fullWidth 
              loading={loading}
              size="lg"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/" style={{ color: 'var(--color-primary)' }}>
            ← Back to Home
          </Link>
        </div>

        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: 'var(--color-info-light)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-info)'
        }}>
          <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            <strong>Demo:</strong> This is a demo login form. Authentication is not yet implemented.
          </p>
        </div>
      </div>
    </div>
  );
}
