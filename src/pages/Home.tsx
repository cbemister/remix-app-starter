import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button/Button';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Welcome to Remix App Starter
        </h1>
        <p className={styles.subtitle}>
          A modern, full-stack React Router application with authentication, 
          database integration, and responsive design built with CSS modules.
        </p>
        <div className={styles.actions}>
          <Button as={Link} to="/dashboard" size="lg">
            Get Started
          </Button>
          <Button as={Link} to="/auth/login" variant="outline" size="lg">
            Sign In
          </Button>
        </div>
      </div>

      <div className={styles.features}>
        <h2 className={styles.featuresTitle}>Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎨</div>
            <h3>CSS Modules</h3>
            <p>Scoped styling with CSS modules and comprehensive theming system</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌙</div>
            <h3>Dark Mode</h3>
            <p>Built-in light and dark mode with system preference detection</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Mobile First</h3>
            <p>Responsive design with mobile-first approach and touch-friendly UI</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔐</div>
            <h3>Authentication</h3>
            <p>Flexible authentication system with mock and real auth support</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🗄️</div>
            <h3>Database</h3>
            <p>Neon PostgreSQL integration with Prisma ORM</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>CI/CD</h3>
            <p>GitHub Actions workflow with Netlify deployment</p>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Ready to build something amazing?</h2>
        <p>This starter includes everything you need to build a modern web application.</p>
        <Button as={Link} to="/dashboard" size="lg">
          Explore Dashboard
        </Button>
      </div>
    </div>
  );
}
