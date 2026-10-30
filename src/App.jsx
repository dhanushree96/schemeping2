import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Schemes from './pages/Schemes';
import SchemeDetails from './pages/SchemeDetails';
import Analytics from './pages/Analytics';
import WhatsAppAlerts from './pages/WhatsAppAlerts';
import NearbyOffices from './pages/NearbyOffices';
import NodalOfficers from './pages/NodalOfficers';
import Documents from './pages/Documents';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/schemes" element={<Layout><Schemes /></Layout>} />
        <Route path="/scheme/:id" element={<Layout><SchemeDetails /></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/alerts" element={<Layout><WhatsAppAlerts /></Layout>} />
        <Route path="/offices" element={<Layout><NearbyOffices /></Layout>} />
        <Route path="/officers" element={<Layout><NodalOfficers /></Layout>} />
        <Route path="/documents" element={<Layout><Documents /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
