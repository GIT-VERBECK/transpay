import React from 'react';
import { Link } from 'react-router-dom';

const TopAppBarStyle = () => (
  <style>{`
    .top-app-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 0.5rem;
      margin: 0 -0.25rem 0.5rem;
      position: sticky;
      top: 0;
      z-index: 20;
      background: linear-gradient(
        180deg,
        var(--color-app-surface) 60%,
        rgba(248, 250, 252, 0.92) 100%
      );
      backdrop-filter: blur(8px);
    }

    .top-app-bar--border {
      border-bottom: 1px solid rgba(226, 232, 240, 0.8);
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
    }

    .top-app-bar__title {
      font-family: var(--font-headline);
      font-weight: 800;
      font-size: 1.125rem;
      color: var(--color-text-strong);
      margin: 0;
      letter-spacing: -0.02em;
    }

    .top-app-bar__brand {
      font-family: var(--font-headline);
      font-weight: 800;
      font-size: 1.125rem;
      color: var(--color-primary);
      text-decoration: none;
    }

    .top-app-bar__right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `}</style>
);

export default function TopAppBar({
  title,
  brand = false,
  right = null,
  border = false,
}) {
  return (
    <header
      className={`top-app-bar ${border ? 'top-app-bar--border' : ''}`.trim()}
    >
      <TopAppBarStyle />
      {brand ? (
        <Link to="/accueil" className="top-app-bar__brand">
          TransPay
        </Link>
      ) : (
        <h1 className="top-app-bar__title">{title}</h1>
      )}
      {right ? <div className="top-app-bar__right">{right}</div> : <span aria-hidden />}
    </header>
  );
}
