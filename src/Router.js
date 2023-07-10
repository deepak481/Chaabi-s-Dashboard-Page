import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';

export default function Router() {
  return (
    <Routes>
      {['/', '/trainings', 'my-account', 'analytics', 'users', 'support'].map((path) => (
        <Route key={path} path={path} element={<Dashboard />} />
      ))}
    </Routes>
  );
}
