import React, { useState } from 'react';

const InputStyle = () => (
  <style>{`
    .form-group {
      margin-bottom: 0;
      display: flex;
      flex-direction: column;
    }

    .form-group + .form-group {
      margin-top: 1.5rem;
    }

    .form-label {
      font-size: 0.875rem;
      font-weight: 600;
      font-family: var(--font-headline);
      color: var(--color-text-strong);
      margin-bottom: 0.375rem;
      padding-left: 4px;
    }

    .input-container {
      display: flex;
      align-items: center;
      position: relative;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      border: 1.5px solid transparent;
    }

    .input-variant-login .input-container {
      background-color: var(--color-input-login-bg);
      border-radius: 12px;
    }

    .input-variant-register .input-container {
      background-color: var(--color-input-register-bg);
      border-radius: 16px;
    }

    .input-variant-login .input-container:focus-within {
      background-color: #fffef5;
      border-color: var(--color-primary-login);
      box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
    }

    .input-variant-register .input-container:focus-within {
      background-color: #f5f5f5;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(253, 184, 19, 0.12);
    }

    .form-input {
      width: 100%;
      padding: 0.9rem 0.5rem;
      background: transparent;
      border: none;
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--color-text-strong);
    }

    .input-variant-register .form-input {
      font-family: var(--font-headline);
      font-weight: 500;
    }

    .input-variant-register .form-input::placeholder {
      color: var(--color-placeholder-register);
    }

    .input-variant-login .form-input::placeholder {
      color: rgba(125, 119, 103, 0.6);
      font-size: 0.875rem;
    }

    .form-input:focus {
      outline: none;
    }

    .input-container.is-phone .form-input {
      flex: 1;
      min-width: 0;
    }

    .form-input.has-leading {
      padding-left: 2.75rem;
    }

    .input-leading-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #635e50;
      display: flex;
      align-items: center;
      pointer-events: none;
      font-size: 1rem;
    }

    .phone-prefix {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.8rem 0 1rem;
      border-right: 1px solid var(--color-input-login-border);
      flex-shrink: 0;
    }

    .input-variant-register .phone-prefix {
      border-right-color: rgba(206, 198, 180, 0.3);
      min-height: 20px;
      align-self: stretch;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .input-variant-login .phone-prefix .prefix {
      color: var(--color-primary-login);
      font-weight: 700;
      font-size: 0.875rem;
    }

    .input-variant-register .phone-prefix .prefix {
      color: var(--color-text-strong);
      font-weight: 700;
      font-size: 0.875rem;
      font-family: var(--font-headline);
    }

    .flag {
      font-size: 1.15rem;
      line-height: 1;
    }

    .phone-suffix {
      display: flex;
      align-items: center;
      padding-right: 12px;
      flex-shrink: 0;
      color: var(--color-primary);
      font-size: 1rem;
    }

    .password-toggle {
      background: none;
      border: none;
      padding: 0.5rem 1rem 0.5rem 0.5rem;
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
      font-size: 0.6875rem;
      line-height: 1.35;
      color: #635e50;
      margin-top: 0.35rem;
      padding-left: 4px;
      font-family: var(--font-headline);
    }

    .input-variant-login .helper-text {
      font-family: var(--font-body);
      font-size: 0.75rem;
      color: #718096;
    }

    .has-error .input-container {
      border-color: var(--color-error);
      background-color: #FFF5F5;
    }
  `}</style>
);

const Input = ({
  label,
  type = 'text',
  placeholder,
  error,
  isPhone = false,
  variant = 'login',
  leadingIcon = null,
  helperText,
  showPasswordToggle = true,
  phoneTrailing = null,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;
  const rootClass = `form-group input-variant-${variant} ${error ? 'has-error' : ''}`;

  const resolvedHelper =
    helperText !== undefined
      ? helperText
      : isPhone && variant === 'login'
        ? null
        : isPhone
          ? 'Utiliser votre numéro M-Pesa'
          : null;

  return (
    <div className={rootClass}>
      <InputStyle />
      {label ? <label className="form-label">{label}</label> : null}
      <div className={`input-container ${isPhone ? 'is-phone' : ''}`}>
        {leadingIcon ? (
          <span className="input-leading-icon" aria-hidden>
            <i className={`bi bi-${leadingIcon}`} />
          </span>
        ) : null}

        {isPhone ? (
          <div className="phone-prefix">
            <span role="img" aria-label="Drapeau RDC" className="flag">
              🇨🇩
            </span>
            <span className="prefix">+243</span>
          </div>
        ) : null}

        <input
          className={`form-input ${leadingIcon && !isPhone ? 'has-leading' : ''}`}
          type={currentType}
          placeholder={placeholder}
          {...props}
        />

        {isPhone && phoneTrailing === 'phone' ? (
          <span className="phone-suffix" aria-hidden>
            <i className="bi bi-telephone" />
          </span>
        ) : null}
        {isPhone && phoneTrailing === 'verified' ? (
          <span className="phone-suffix" aria-hidden title="Numéro vérifié localement">
            <i className="bi bi-check-circle-fill" />
          </span>
        ) : null}

        {isPassword && showPasswordToggle ? (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
          >
            <i
              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} eye-icon`}
            />
          </button>
        ) : null}
      </div>
      {error ? <span className="error-text">{error}</span> : null}
      {!error && resolvedHelper ? (
        <span className="helper-text">{resolvedHelper}</span>
      ) : null}
    </div>
  );
};

export default Input;
