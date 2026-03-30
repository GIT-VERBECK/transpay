import React from 'react';

const FooterStyle = () => (
  <style>{`
    .app-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      padding: .30rem 1rem 1rem 1rem;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #E2E8F0;
      z-index: 1000;
      box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      color: #94A3B8;
      text-decoration: none;
      font-size: 0.6rem;
      font-weight: 500;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      min-width: 60px;
    }

    .nav-icon {
      font-size: 1.2rem;
      padding: 0.5rem;
      border-radius: 12px;
      transition: inherit;

    .nav-item.active {
      color: var(--color-primary);
    }

    .nav-item.active .nav-icon {
      background-color: #FFF9E6;
      font-weight: 700;
    }

    .nav-item:hover:not(.active) {
      color: var(--color-secondary);
    }
  `}</style>
);

const Footer = ({ activeItem = 'accueil' }) => {
  const items = [
    { id: 'accueil', name: 'Accueil', icon: 'bi-house' },
    { id: 'trajets', name: 'Trajets', icon: 'bi-map' },
    { id: 'historique', name: 'Historique', icon: 'bi-clock-history' },
    { id: 'librairie', name: 'Librairie', icon: 'bi-grid-fill' }
  ];

  return (
    <nav className="app-footer">
      {/* <FooterStyle />
      {items.map(item => (
        <div key={item.id} className={`nav-item ${activeItem === item.id ? 'active' : ''}`}>
          <i className={`bi ${item.icon} nav-icon`}></i>
          <span>{item.name}</span>
        </div>
      ))} */}
    </nav>
  );
};

export default Footer;
