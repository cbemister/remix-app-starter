import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Login } from './pages/auth/Login';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/auth/login" element={<Layout showNavigation={false} />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element={<Layout />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
