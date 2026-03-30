import React, { useState } from 'react';

const InputStyle = () => (
  <style>{`
    .form-group {
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .form-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-secondary);
      margin-bottom: 0.5rem;
    }

    .input-container {
      display: flex;
      align-items: center;
      position: relative;
      background-color: #EDF2F7;
      border-radius: var(--radius-md);
      padding: 0.2rem 0.5rem;
      transition: all 0.2s ease;
      border: 1.5px solid transparent;
    }

    .input-container:focus-within {
      background-color: white;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(255, 184, 0, 0.1);
    }

    .form-input {
      width: 100%;
      padding: 0.8rem 0.5rem;
      background: transparent;
      border: none;
      font-family: var(--font-body);
      font-size: 1rem;
      color: #2D3748;
    }

    .form-input:focus {
      outline: none;
    }

    .phone-prefix {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.8rem;
      border-right: 1px solid #CBD5E0;
      color: var(--color-secondary);
      font-weight: 500;
    }

    .flag {
      font-size: 1.2rem;
    }

    .password-toggle {
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: #A0AEC0;
      display: flex;
      align-items: center;
    }

    .eye-icon {
      font-size: 1.25rem;
    }

    .error-text {
      font-size: 0.75rem;
      color: var(--color-error);
      margin-top: 0.4rem;
    }

    .helper-text {
      font-size: 0.75rem;
      color: #718096;
      margin-top: 0.4rem;
    }

    .has-error .input-container {
      border-color: var(--color-error);
      background-color: #FFF5F5;
    }
  `}</style>
);

const Input = ({ label, type = 'text', placeholder, error, isPhone = false, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;
  
  return (
    <div className={`form-group ${error ? 'has-error' : ''}`}>
      <InputStyle />
      {label && <label className="form-label">{label}</label>}
      <div className={`input-container ${isPhone ? 'is-phone' : ''}`}>
        
        {isPhone && (
          <div className="phone-prefix">
            <span role="img" aria-label="BDI Flag" className="flag">🇨🇩</span>
            <span className="prefix">+243</span>
          </div>
        )}
        
        <input 
          className="form-input" 
          type={currentType} 
          placeholder={placeholder}
          {...props}
        />
        
        {isPassword && (
          <button 
            type="button" 
            className="password-toggle" 
            onClick={() => setShowPassword(!showPassword)}
            tabIndex="-1"
          >
            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} eye-icon`}></i>
          </button>
        )}
      </div>
      {error && <span className="error-text">{error}</span>}
      {!error && isPhone && <span className="helper-text">Utiliser votre numéro M-Pesa</span>}
    </div>
  );
};

export default Input;
