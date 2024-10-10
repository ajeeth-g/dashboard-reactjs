import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/loginPage/Login';
import Dashboard from './pages/dashboardPage/Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  );
};

export default App;
