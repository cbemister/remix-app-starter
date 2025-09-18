import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button/Button';

export function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '4rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>
        🔍
      </div>
      
      <h1 style={{ fontSize: '3rem', margin: 0 }}>
        404
      </h1>
      
      <h2 style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
        Page Not Found
      </h2>
      
      <p style={{ 
        maxWidth: '500px', 
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--font-size-lg)',
        lineHeight: 'var(--line-height-relaxed)'
      }}>
        Sorry, we couldn't find the page you're looking for. 
        The page might have been moved, deleted, or you might have entered the wrong URL.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button as={Link} to="/" size="lg">
          Go Home
        </Button>
        <Button as={Link} to="/dashboard" variant="outline" size="lg">
          Visit Dashboard
        </Button>
      </div>
    </div>
  );
}
