import React from 'react';

const ButtonStyle = () => (
  <style>{`
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 1.5rem;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 1rem;
      border-radius: var(--radius-md);
      border: none;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      gap: 0.5rem;
      text-decoration: none;
      min-width: 140px;
    }

    .btn:disabled {
      background-color: var(--color-surface);
      color: var(--color-disabled-text);
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
      opacity: 0.8;
    }

    .btn-primary {
      background-color: var(--color-primary);
      color: white;
      box-shadow: 0 4px 14px 0 rgba(253, 184, 19, 0.35);
    }

    .btn-primary:hover:not(:disabled) {
      background-color: var(--color-primary-dark);
      transform: translateY(-1px);
    }

    .btn-login-primary {
      background-color: var(--color-primary-login);
      box-shadow: 0 10px 15px -3px rgba(251, 191, 36, 0.2),
        0 4px 6px -4px rgba(251, 191, 36, 0.2);
    }

    .btn-login-primary:hover:not(:disabled) {
      background-color: #f5b41a;
      filter: brightness(0.98);
    }

    .btn-secondary {
      background-color: #D4E9F2;
      color: #4A5568;
    }

    .btn-secondary:hover:not(:disabled) {
      background-color: #CBD5E0;
    }

    .btn-success {
      background-color: var(--color-tertiary);
      color: white;
    }

    .btn-success:hover:not(:disabled) {
      filter: brightness(1.1);
    }

    .btn-loading {
      cursor: wait;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .bi-spin {
      display: inline-block;
      animation: spin 0.8s linear infinite;
    }

    .btn-icon {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
    }

    .btn-trailing {
      display: inline-flex;
      align-items: center;
    }
  `}</style>
);

const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  icon = null,
  trailing = null,
  loginPrimary = false,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const primaryClass =
    variant === 'primary' && loginPrimary ? 'btn-login-primary' : `btn-${variant}`;

  return (
    <>
      <ButtonStyle />
      <button
        className={`btn ${primaryClass} ${isLoading ? 'btn-loading' : ''}`}
        disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="spinner">
            <i className="bi bi-arrow-repeat bi-spin" />
            &nbsp;Traitement...
          </span>
        ) : (
          <span
            className="btn-content"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {icon ? <span className="btn-icon">{icon}</span> : null}
            {children}
            {trailing ? <span className="btn-trailing">{trailing}</span> : null}
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
