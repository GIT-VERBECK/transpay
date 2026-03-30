import React from 'react';

const CardStyle = () => (
  <style>{`
    .card-container {
      background: white;
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      position: relative;
      transition: all 0.2s ease-out;
      border: 1px solid rgba(226, 232, 240, 0.5);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card-elevated {
      box-shadow: var(--shadow-md);
    }

    .card-outline {
      background: transparent;
      border: 1.5px solid var(--color-surface);
      box-shadow: none;
    }

    .interactive {
      cursor: pointer;
    }

    .interactive:active {
      transform: scale(0.98);
    }

    .interactive:hover {
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary);
    }

    .card-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #FFF5D1;
      color: #D69E2E;
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-full);
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .card-icon {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #FFF9E6;
      border-radius: var(--radius-md);
      color: var(--color-primary);
      font-size: 1.5rem;
    }

    .card-title {
      font-size: 1.125rem;
      color: #1A202C;
      font-family: var(--font-headline);
      margin: 0;
    }

    .card-subtitle {
      font-size: 0.875rem;
      color: #718096;
      margin: 0;
    }

    .card-content {
      font-size: 1rem;
    }
  `}</style>
);

const Card = ({ children, title, subtitle, icon, badge, onClick, variant = 'elevated', ...props }) => {
  return (
    <div 
      className={`card-container card-${variant} ${onClick ? 'interactive' : ''}`} 
      onClick={onClick}
      {...props}
    >
      <CardStyle />
      {badge && <span className="card-badge">{badge}</span>}
      
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <div className="card-title-group">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      </div>
      
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
