import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopAppBar from '../componements/TopAppBar';

export default function PaymentSuccess() {
  const { state } = useLocation();
  const amount = state?.amount ?? 5000;
  const devise = state?.devise ?? 'FC';
  const routeLabel = state?.routeLabel ?? 'Rond-Point BDGL → Birere';
  const reference = state?.reference ?? 'TP-00000000';

  return (
    <div className="app-page">
      <TopAppBar title="Confirmation" border />

      <div className="success-page">
        <div className="success-icon-wrap" aria-hidden>
          <i className="bi bi-check-lg" />
        </div>
        <h2 className="success-title">Paiement réussi</h2>
        <p className="success-sub">
          Votre ticket numérique est disponible dans la Librairie. Montrez le QR
          au chauffeur si besoin.
        </p>

        <div className="success-card">
          <div className="success-card__head">
            <div>
              <span className="pay-summary__label">Transaction</span>
              <p
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 800,
                  margin: '0.25rem 0 0',
                  fontSize: '1.05rem',
                }}
              >
                {amount} {devise}
              </p>
            </div>
            <span className="ticket-status">Validé</span>
          </div>
          <div className="success-card__rows">
            <div>
              <span>Trajet</span>
              <div style={{ fontWeight: 600, color: 'var(--color-text-strong)' }}>
                {routeLabel}
              </div>
            </div>
            <div>
              <span>Référence</span>
              <div style={{ fontWeight: 600, color: 'var(--color-text-strong)' }}>
                {reference}
              </div>
            </div>
            <div>
              <span>Date</span>
              <div style={{ fontWeight: 600, color: 'var(--color-text-strong)' }}>
                {new Intl.DateTimeFormat('fr-FR', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                }).format(new Date())}
              </div>
            </div>
          </div>
        </div>

        <ButtonAsLink to="/librairie" className="btn-ghost" primary>
          <i className="bi bi-ticket-perforated" style={{ marginRight: 8 }} />
          Voir mon ticket
        </ButtonAsLink>
        <Link to="/accueil" className="btn-ghost" style={{ marginTop: 12 }}>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

function ButtonAsLink({ to, children, className, primary }) {
  return (
    <Link
      to={to}
      className={className}
      style={
        primary
          ? {
              background: 'var(--color-primary)',
              color: '#fff',
              border: 'none',
              boxShadow: '0 4px 14px rgba(253, 184, 19, 0.35)',
            }
          : undefined
      }
    >
      {children}
    </Link>
  );
}
