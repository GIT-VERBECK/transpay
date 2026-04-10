import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripCard = ({ trip }) => {
  const navigate = useNavigate();

  return (
    <article
      className="trip-card"
      style={{
        background: 'var(--color-app-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(226, 232, 240, 0.75)',
        boxShadow: 'var(--shadow-sm)',
        padding: '1.15rem',
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '0.35rem',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                border: '2px solid var(--color-primary)',
                background: '#fff',
              }}
            />
            <span
              style={{
                width: 2,
                flex: 1,
                minHeight: 36,
                background:
                  'linear-gradient(180deg, var(--color-primary), rgba(253,184,19,0.25))',
                margin: '4px 0',
                borderRadius: 1,
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: 'var(--color-primary)',
                border: '2px solid var(--color-primary-dark)',
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: '1rem' }}>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#94a3b8',
                  margin: '0 0 0.15rem',
                }}
              >
                {trip.departLabel}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  margin: 0,
                  color: 'var(--color-text-strong)',
                }}
              >
                {trip.depart}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#94a3b8',
                  margin: '0 0 0.15rem',
                }}
              >
                {trip.arriveeLabel}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  margin: 0,
                  color: 'var(--color-text-strong)',
                }}
              >
                {trip.arrivee}
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <p
            style={{
              fontSize: '0.65rem',
              color: '#94a3b8',
              textTransform: 'uppercase',
              margin: '0 0 0.2rem',
            }}
          >
            Tarif
          </p>
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: 'var(--color-primary)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            {trip.prix}
          </p>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--color-text-muted)',
              margin: '0.15rem 0 0',
            }}
          >
            {trip.prixDevise}
          </p>
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid rgba(226, 232, 240, 0.9)',
          paddingTop: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <i className="bi bi-clock" aria-hidden />
          <span>{trip.duree}</span>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/trajets/${trip.id}`)}
          style={{
            padding: '0.55rem 1.35rem',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            background: 'var(--color-primary)',
            color: '#fff',
            fontFamily: 'var(--font-headline)',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(253, 184, 19, 0.35)',
          }}
        >
          {trip.actionLabel}
        </button>
      </div>
    </article>
  );
};

export default TripCard;
