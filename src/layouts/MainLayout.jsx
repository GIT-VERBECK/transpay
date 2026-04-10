import React from 'react';
import Footer from '../componements/Footer';

const LayoutStyle = () => (
  <style>{`
    .layout-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background);
      max-width: 480px;
      margin: 0 auto;
      box-shadow: 0 0 24px rgba(0,0,0,0.05);
      position: relative;
    }

    .layout-wrapper.page-login {
      background-color: var(--color-page-login-bg);
    }

    .layout-wrapper.page-register {
      background-color: var(--color-page-register-bg);
    }

    .layout-content {
      flex: 1;
      padding: 1rem 1.25rem;
      overflow-y: auto;
    }

    .layout-content.layout-with-app-footer {
      padding-bottom: 5rem;
    }

    .section-spacing {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `}</style>
);

const MainLayout = ({
  children,
  activeNav = 'accueil',
  showFooter = true,
  pageClassName = '',
}) => {
  const wrapperClass = ['layout-wrapper', pageClassName].filter(Boolean).join(' ');
  const contentClass = [
    'layout-content',
    showFooter ? 'layout-with-app-footer' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      <LayoutStyle />
      <main className={contentClass}>
        <div className="section-spacing">{children}</div>
      </main>
      {showFooter ? <Footer activeItem={activeNav} /> : null}
    </div>
  );
};

export default MainLayout;
