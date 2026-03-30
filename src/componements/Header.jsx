import React from 'react';

const HeaderStyle = () => (
  <style>{`
    .app-header {
      display: flex;
      justify-content:left;
      align-items: center;
      padding: 1.5rem 1.25rem 1rem 1.25rem;
      background-color:#ffffffb7;
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo-text {
      font-family: var(--font-headline);
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--color-primary);
      letter-spacing: -0.5px;
    }
 
 
  `}</style>
);

const Header = () => {
  return (
    <header className="app-header">
      <HeaderStyle />
      <div className="header-logo"> 
        <span className="logo-text">TransPay</span>
      </div>
    </header>
  );
};

export default Header;
