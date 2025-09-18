import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styles from './Layout.module.css';

interface LayoutProps {
  showNavigation?: boolean;
}

export function Layout({ showNavigation = true }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {showNavigation && <Navigation />}
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
