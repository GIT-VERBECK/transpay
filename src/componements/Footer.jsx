import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterStyle = () => (
  <style>{`
    .app-footer {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 480px;
      background: white;
      padding: 0.35rem 0.75rem 0.85rem;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      border-top: 1px solid #E2E8F0;
      z-index: 1000;
      box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      color: #94A3B8;
      text-decoration: none;
      font-size: 0.65rem;
      font-weight: 600;
      font-family: var(--font-headline);
      transition: color 0.2s ease, transform 0.15s ease;
      cursor: pointer;
      min-width: 3.5rem;
      padding: 0.25rem;
      border-radius: var(--radius-sm);
      border: none;
      background: none;
    }

    .nav-icon {
      font-size: 1.15rem;
      padding: 0.4rem;
      border-radius: 12px;
      transition: inherit;
    }

    .nav-item.active {
      color: var(--color-primary);
    }

    .nav-item.active .nav-icon {
      background-color: #FFF9E6;
    }

    .nav-item:hover:not(.active) {
      color: var(--color-secondary);
    }
  `}</style>
);

const NAV = [
  { id: 'accueil', path: '/accueil', name: 'Accueil', icon: 'bi-house' },
  { id: 'trajets', path: '/trajets', name: 'Trajets', icon: 'bi-map' },
  {
    id: 'historique',
    path: '/historique',
    name: 'Historique',
    icon: 'bi-clock-history',
  },
  { id: 'librairie', path: '/librairie', name: 'Librairie', icon: 'bi-grid-fill' },
];

const Footer = () => {
  return (
    <nav className="app-footer" aria-label="Navigation principale">
      <FooterStyle />
      {NAV.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === '/accueil'}
          className={({ isActive }) =>
            `nav-item ${isActive ? 'active' : ''}`.trim()
          }
        >
          <i className={`bi ${item.icon} nav-icon`} aria-hidden />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Footer;
