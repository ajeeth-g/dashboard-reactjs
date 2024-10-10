import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long';
    }
    if (!hasUppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!hasLowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!hasNumber) {
      return 'Password must contain at least one number';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character';
    }

    return '';
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      isValid = false;
    }

    if (!isValid) return;

    console.log('Logged in successfully with', email, password);

    navigate('/dashboard');
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin} className='login-form'>
        <h2>Login</h2>

        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
          />
          {emailError && <p className='error-message'>{emailError}</p>}{' '}
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          {passwordError && <p className='error-message'>{passwordError}</p>}{' '}
        </div>

        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
