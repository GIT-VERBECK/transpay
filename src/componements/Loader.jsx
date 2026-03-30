import React from 'react';

const LoaderStyle = () => (
  <style>{`
    .loader-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      background: transparent;
      width: 100%;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .loader-ring {
      display: inline-block;
      position: relative;
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
    }

    .loader-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 3rem;
      height: 3rem;
      margin: 0.5rem;
      border: 4px solid var(--color-primary);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--color-primary) transparent transparent transparent;
    }

    .loader-ring div:nth-child(1) { animation-delay: -0.45s; }
    .loader-ring div:nth-child(2) { animation-delay: -0.3s; }
    .loader-ring div:nth-child(3) { animation-delay: -0.15s; }

    @keyframes lds-ring {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loader-title {
      font-weight: 700;
      font-family: var(--font-headline);
      margin: 0.5rem 0 0.2rem 0;
      color: #1A202C;
    }

    .loader-subtitle {
      font-size: 0.8rem;
      color: #718096;
    }
  `}</style>
);

const Loader = ({ message = 'Chargement...', subMessage = 'Veuillez patienter un instant' }) => {
  return (
    <div className="loader-overlay">
      <LoaderStyle />
      <div className="loader-container">
        <div className="loader-ring">
          <div></div><div></div><div></div><div></div>
        </div>
        {message && <p className="loader-title">{message}</p>}
        {subMessage && <p className="loader-subtitle">{subMessage}</p>}
      </div>
    </div>
  );
};

export default Loader;
