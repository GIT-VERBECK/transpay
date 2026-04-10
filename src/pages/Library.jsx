import React from 'react';
import { Link } from 'react-router-dom';
import TopAppBar from '../componements/TopAppBar';
const TICKETS = [
  {
    id: 'tk1',
    route: 'BDGL → Birere',
    date: '10 avril 2026 · 08:42',
    status: 'Actif',
  },
  {
    id: 'tk2',
    route: 'Himbi → Majengo',
    date: '8 avril 2026 · 17:05',
    status: 'Utilisé',
  },
];

export default function Library() {
  return (
    <div className="app-page">
      <TopAppBar title="Librairie" border />

      <div className="library-intro">
        <h2>Vos tickets</h2>
        <p>
          Tickets numériques et preuves de paiement. Présentez le QR au contrôle
          ou au chauffeur.
        </p>
      </div>

      {TICKETS.map((t) => (
        <Link
          key={t.id}
          to={`/tickets/${t.id}`}
          className="library-ticket-link"
        >
          <article className="ticket-card">
            <div className="ticket-card__head">
              <div>
                <h3 className="ticket-card__route">{t.route}</h3>
                <p className="ticket-card__date">{t.date}</p>
              </div>
              <span
                className="ticket-status"
                style={
                  t.status === 'Utilisé'
                    ? {
                        background: 'rgba(148, 163, 184, 0.2)',
                        color: '#64748b',
                      }
                    : undefined
                }
              >
                {t.status}
              </span>
            </div>
            <div className="ticket-qr">
              <div className="qr-placeholder" aria-hidden />
              <p className="ticket-qr__hint">
                Appuyez pour ouvrir le ticket digital et le QR plein écran.
              </p>
            </div>
          </article>
        </Link>
      ))}

      <Link to="/trajets" className="btn-ghost">
        Réserver un nouveau trajet
      </Link>
    </div>
  );
}
