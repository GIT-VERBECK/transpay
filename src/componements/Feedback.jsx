import React from 'react';

const FeedbackStyle = () => (
  <style>{`
    .alert-container {
      display: flex;
      position: relative;
      padding: 1rem;
      border-radius: var(--radius-md);
      margin-bottom: 1.25rem;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .alert-line {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
    }

    .alert-success { background-color: #E6F4EA; }
    .alert-success .alert-line { background-color: var(--color-success); }
    .alert-success .alert-title { color: #137333; }
    .alert-success .alert-icon-wrapper { color: var(--color-success); }

    .alert-error { background-color: #FDECEA; }
    .alert-error .alert-line { background-color: var(--color-error); }
    .alert-error .alert-title { color: #C53030; }
    .alert-error .alert-icon-wrapper { color: var(--color-error); }

    .alert-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .alert-icon-wrapper {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
    }

    .alert-title {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
    }

    .alert-message {
      padding-left: 2rem;
      margin: 0.25rem 0 0 0;
      font-size: 0.875rem;
      color: #4A5568;
    }
  `}</style>
);

const Feedback = ({ title, message, variant = 'error', icon = null, ...props }) => {
  const getIcon = () => {
    if (icon) return icon;
    if (variant === 'success') return <i className="bi bi-check-circle-fill"></i>;
    if (variant === 'error') return <i className="bi bi-exclamation-circle-fill"></i>;
    return null;
  };

  return (
    <div className={`alert-container alert-${variant}`} {...props}>
      <FeedbackStyle />
      <div className="alert-line"></div>
      <div className="alert-content">
        <div className="alert-header">
           <div className="alert-icon-wrapper">{getIcon()}</div>
           <h4 className="alert-title">{title}</h4>
        </div>
        <p className="alert-message">{message}</p>
      </div>
    </div>
  );
};

export default Feedback;
