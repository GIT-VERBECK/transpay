import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/payment-failure.css';

export default function PaymentFailure() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const returnTo = state?.returnTo ?? '/paiement';

  return (
    <div className="failure-page">
      <div className="failure-card">
        <div className="failure-icon-wrap">
          <div className="failure-icon-circle" aria-hidden>
            <span className="failure-icon-inner">!</span>
          </div>
        </div>
        <h1 className="failure-title">Échec du paiement</h1>
        <p className="failure-subtitle">
          Solde insuffisant ou délai dépassé
        </p>

        <div className="failure-diagnostic">
          <div className="failure-diagnostic__head">
            <i className="bi bi-info-circle-fill" aria-hidden />
            <span>Détails de l&apos;erreur</span>
          </div>
          <p className="failure-diagnostic__body">
            Veuillez vérifier le solde de votre compte mobile money ou relancer
            la transaction si le délai a expiré.
          </p>
        </div>

        <div className="failure-actions">
          <button
            type="button"
            className="failure-btn-primary"
            onClick={() =>
              navigate(returnTo, {
                replace: true,
                state: { trip: state?.paymentContext?.trip },
              })
            }
          >
            <i className="bi bi-arrow-clockwise" aria-hidden />
            Réessayer
          </button>
          <button
            type="button"
            className="failure-btn-secondary"
            onClick={() => navigate('/trajets', { replace: true })}
          >
            Retour
          </button>
        </div>

        <a
          className="failure-support"
          href="mailto:support@transpay.app?subject=Échec%20paiement%20TransPay"
        >
          Contacter le support
          <i className="bi bi-arrow-up-right" aria-hidden />
        </a>
      </div>
    </div>
  );
}
