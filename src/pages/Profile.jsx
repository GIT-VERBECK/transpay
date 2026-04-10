import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopAppBar from '../componements/TopAppBar';
import '../styles/profile.css';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="app-page profile-page">
      <TopAppBar
        title="Mon profil"
        border
        right={
          <Link
            to="/accueil"
            aria-label="Accueil"
            style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}
          >
            <i className="bi bi-house" />
          </Link>
        }
      />

      <div className="profile-hero">
        <div className="profile-avatar-xl" aria-hidden>
          JM
        </div>
        <h2 className="profile-name">Jean-Marc Verbeck</h2>
        <p className="profile-phone">+243 000 000 000</p>
      </div>

      <nav className="profile-list" aria-label="Compte">
        <Link to="/historique">
          <span className="profile-list__left">
            <i className="bi bi-clock-history" aria-hidden />
            Historique des paiements
          </span>
          <i className="bi bi-chevron-right" aria-hidden />
        </Link>
        <Link to="/librairie">
          <span className="profile-list__left">
            <i className="bi bi-ticket-perforated" aria-hidden />
            Mes tickets
          </span>
          <i className="bi bi-chevron-right" aria-hidden />
        </Link>
        <Link to="/design-system">
          <span className="profile-list__left">
            <i className="bi bi-palette" aria-hidden />
            Design system (interne)
          </span>
          <i className="bi bi-chevron-right" aria-hidden />
        </Link>
        <a href="mailto:support@transpay.app">
          <span className="profile-list__left">
            <i className="bi bi-headset" aria-hidden />
            Contacter le support
          </span>
          <i className="bi bi-box-arrow-up-right" aria-hidden />
        </a>
        <button
          type="button"
          className="profile-signout"
          onClick={() => navigate('/login', { replace: true })}
        >
          <span className="profile-list__left">
            <i className="bi bi-box-arrow-left" aria-hidden />
            Déconnexion
          </span>
        </button>
      </nav>

      <p className="profile-version">TransPay · v0.1.0 · Goma</p>
    </div>
  );
}
