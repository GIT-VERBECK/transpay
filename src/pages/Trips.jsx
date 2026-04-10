import React, { useMemo, useState } from 'react';
import TopAppBar from '../componements/TopAppBar';
import TripCard from '../componements/TripCard';
import { MOCK_TRIPS } from '../data/mockTrips';
export default function Trips() {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return MOCK_TRIPS;
    return MOCK_TRIPS.filter(
      (t) =>
        t.depart.toLowerCase().includes(s) ||
        t.arrivee.toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <div className="app-page">
      <TopAppBar title="TransPay" border />
      <header className="trips-head">
        <h2 className="trips-head__title">Trajets disponibles</h2>
        <p className="trips-head__sub">Choisissez votre itinéraire à Goma</p>
      </header>

      <div className="trips-search-row">
        <div className="trips-search">
          <i className="bi bi-search" aria-hidden />
          <input
            type="search"
            placeholder="Où allez-vous ?"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Rechercher un trajet"
          />
        </div>
        <button type="button" className="trips-filter-btn" aria-label="Filtres">
          <i className="bi bi-sliders" />
        </button>
      </div>

      <div className="trips-list">
        {filtered.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>

      <section className="promo-banner" aria-labelledby="promo-title">
        <div className="promo-banner__blur" aria-hidden />
        <h3 id="promo-title" className="promo-banner__title">
          Paiement instantané
        </h3>
        <p className="promo-banner__text">
          Payez vos trajets en toute sécurité en scannant simplement le code QR
          du chauffeur.
        </p>
        <div className="promo-banner__badge" aria-hidden>
          QR
        </div>
      </section>
    </div>
  );
}
