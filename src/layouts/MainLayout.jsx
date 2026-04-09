import React from 'react';
import Header from '../componements/Header';
import Footer from '../componements/Footer';

const LayoutStyle = () => (
  <style>{`
    .layout-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background);
      max-width: 480px; /* Mobile-first approach as seen in mockup */
      margin: 0 auto;
      box-shadow: 0 0 24px rgba(0,0,0,0.05);
      position: relative;
    }

    .layout-content {
      flex: 1;
      padding: 1rem 1.25rem;
      padding-bottom: 5rem; /* Space for the fixed bottom footer */
      overflow-y: auto;
    }

    /* Standardized spacing between sections */
    .section-spacing {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `}</style>
);

const MainLayout = ({ children, activeNav = 'accueil' }) => {
  return (
    <div className="layout-wrapper">
      <LayoutStyle /> 
      <main className="layout-content">
        <div className="section-spacing">
          {children}
        </div>
      </main>
      <Footer activeItem={activeNav} />
    </div>
  );
};

export default MainLayout;
