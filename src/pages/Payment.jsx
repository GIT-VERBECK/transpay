import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../componements/Button';
import TopAppBar from '../componements/TopAppBar';
const OPERATORS = [
  { id: 'airtel', name: 'Airtel', className: 'operator-btn__logo--airtel' },
  { id: 'mpesa', name: 'M-Pesa', className: 'operator-btn__logo--mpesa' },
  { id: 'orange', name: 'Orange', className: 'operator-btn__logo--orange' },
];

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const trip = location.state?.trip ?? location.state?.paymentContext?.trip;
  const [operator, setOperator] = useState('mpesa');
  const [phone, setPhone] = useState('');

  const amount = trip?.prix ?? 5000;
  const devise = trip?.prixDevise ?? 'FC';
  const routeLabel = trip
    ? `${trip.depart} → ${trip.arrivee}`
    : 'Recharge portefeuille';

  const handlePay = () => {
    navigate('/succes', {
      state: {
        trip,
        operator,
        amount,
        devise,
        routeLabel,
        reference: `TP-${Date.now().toString().slice(-8)}`,
      },
    });
  };

  return (
    <div className="app-page">
      <TopAppBar
        title="Paiement"
        border
        right={
          <Link
            to={trip ? `/trajets/${trip.id}` : '/accueil'}
            aria-label="Fermer"
            style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem' }}
          >
            <i className="bi bi-x-lg" />
          </Link>
        }
      />

      <section className="pay-summary" aria-label="Résumé">
        <div className="pay-summary__row">
          <span className="pay-summary__label">Montant à payer</span>
          <span className="pay-summary__amount">
            {amount} {devise}
          </span>
        </div>
        <div className="pay-route-mini">
          <div className="pay-route-mini__dots" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="pay-route-text">
            {trip ? (
              <>
                <strong>{trip.depart}</strong>
                vers {trip.arrivee}
              </>
            ) : (
              <>
                <strong>TransPay</strong>
                Ajout de fonds ou paiement libre
              </>
            )}
          </div>
        </div>
      </section>

      <h2 className="pay-section-title">Choisir l&apos;opérateur</h2>
      <div className="operators" role="group" aria-label="Opérateur Mobile Money">
        {OPERATORS.map((op) => (
          <button
            key={op.id}
            type="button"
            className={`operator-btn ${operator === op.id ? 'selected' : ''}`}
            onClick={() => setOperator(op.id)}
          >
            <span
              className={`operator-btn__logo ${op.className}`}
              aria-hidden
            >
              {op.name[0]}
            </span>
            <span className="operator-btn__name">{op.name}</span>
          </button>
        ))}
      </div>

      <div className="pay-phone-block">
        <label htmlFor="pay-phone">Numéro Mobile Money</label>
        <div className="pay-phone-field">
          <span className="prefix">+243</span>
          <input
            id="pay-phone"
            type="tel"
            inputMode="numeric"
            placeholder="000 000 000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
        <p className="pay-hint">
          Entrez le numéro associé à votre compte{' '}
          {OPERATORS.find((o) => o.id === operator)?.name} pour valider le
          paiement par notification PUSH.
        </p>
      </div>

      <div className="security-row">
        <i className="bi bi-shield-check" aria-hidden />
        <div>
          <h4>Paiement sécurisé</h4>
          <p>
            Nous ne stockons pas votre PIN Mobile Money. La validation se fait
            uniquement sur votre téléphone.
          </p>
        </div>
      </div>

      <Button
        variant="primary"
        style={{
          width: '100%',
          borderRadius: '14px',
          minHeight: '3.25rem',
          fontSize: '1rem',
        }}
        onClick={handlePay}
        trailing={<i className="bi bi-arrow-right" aria-hidden />}
      >
        Payer maintenant
      </Button>
      <button
        type="button"
        className="pay-demo-failure"
        onClick={() =>
          navigate('/echec-paiement', {
            state: {
              returnTo: '/paiement',
              paymentContext: { trip },
            },
          })
        }
      >
        Scénario échec (démo)
      </button>
    </div>
  );
}
