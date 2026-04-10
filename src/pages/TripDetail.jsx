import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../componements/Button';
import TopAppBar from '../componements/TopAppBar';
import { getTripById } from '../data/mockTrips';
export default function TripDetail() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const trip = getTripById(tripId ?? '');

  return (
    <div className="app-page">
      <TopAppBar
        title="Détail du trajet"
        border
        right={
          <Link
            to="/trajets"
            aria-label="Retour aux trajets"
            style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem' }}
          >
            <i className="bi bi-x-lg" />
          </Link>
        }
      />

      <div className="map-block" aria-hidden>
        <div className="map-block__shade" />
        <div className="map-floating-card">
          <div>
            <p className="map-floating-card__route">
              {trip.depart} → {trip.arrivee}
            </p>
            <p className="map-floating-card__meta">
              Correspondance confirmée · {trip.duree}
            </p>
          </div>
          <div className="price-pill">
            <div className="price-pill__label">Total</div>
            <div className="price-pill__value">
              {trip.prix} {trip.prixDevise}
            </div>
          </div>
        </div>
      </div>

      <section className="timeline-card" aria-label="Itinéraire">
        <div className="timeline">
          <div className="timeline__rail">
            <span className="timeline__dot" />
            <span className="timeline__line" />
            <span className="timeline__dot timeline__dot--end" />
          </div>
          <div style={{ flex: 1 }}>
            <div className="timeline__content">
              <p className="timeline__label">Départ</p>
              <p className="timeline__place">{trip.depart}</p>
            </div>
            <div className="timeline__content" style={{ marginTop: '1.25rem' }}>
              <p className="timeline__label">Destination</p>
              <p className="timeline__place">{trip.arrivee}</p>
            </div>
          </div>
        </div>
        <div className="info-grid">
          <div className="info-chip">
            <div className="info-chip__icon">
              <i className="bi bi-clock" aria-hidden />
            </div>
            <div>
              <p className="info-chip__k">Durée</p>
              <p className="info-chip__v">{trip.duree}</p>
            </div>
          </div>
          <div className="info-chip">
            <div className="info-chip__icon">
              <i className="bi bi-people" aria-hidden />
            </div>
            <div>
              <p className="info-chip__k">Places</p>
              <p className="info-chip__v">{trip.places}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="driver-card" aria-label="Chauffeur">
        <div className="driver-card__left">
          <div className="driver-avatar">JV</div>
          <div>
            <p className="driver-card__role">Chauffeur assigné</p>
            <p className="driver-card__name">Jean-Marc Verbeck</p>
          </div>
        </div>
        <a href="tel:+243000000000" className="driver-card__call">
          <i className="bi bi-telephone-outbound" aria-hidden />
          Appeler
        </a>
      </section>

      <div className="action-stack">
        <Button
          variant="primary"
          style={{ width: '100%', borderRadius: '12px' }}
          onClick={() =>
            navigate('/paiement', {
              state: { trip },
            })
          }
        >
          Payer avec Mobile Money
        </Button>
        <p className="legal-hint">
          En continuant, vous acceptez les conditions du transporteur. Aucun
          prélèvement sans votre validation sur le téléphone.
        </p>
      </div>
    </div>
  );
}
