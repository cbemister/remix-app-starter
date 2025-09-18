import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../theme/ThemeToggle';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink} onClick={closeMenu}>
            <span className={styles.brandText}>Remix Starter</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            <Link
              to="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`${styles.navLink} ${isActive('/dashboard') ? styles.active : ''}`}
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className={`${styles.navLink} ${isActive('/profile') ? styles.active : ''}`}
            >
              Profile
            </Link>
          </div>
          <div className={styles.navActions}>
            <ThemeToggle />
            <Link to="/auth/login" className={styles.loginButton}>
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton}>
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className={styles.menuButton}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavContent}>
            <Link
              to="/"
              className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`${styles.mobileNavLink} ${isActive('/dashboard') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className={`${styles.mobileNavLink} ${isActive('/profile') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Profile
            </Link>
            <div className={styles.mobileNavActions}>
              <Link to="/auth/login" className={styles.mobileLoginButton} onClick={closeMenu}>
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={styles.menuIcon}>
      <span className={`${styles.menuLine} ${isOpen ? styles.menuLineOpen1 : ''}`} />
      <span className={`${styles.menuLine} ${isOpen ? styles.menuLineOpen2 : ''}`} />
      <span className={`${styles.menuLine} ${isOpen ? styles.menuLineOpen3 : ''}`} />
    </div>
  );
}
