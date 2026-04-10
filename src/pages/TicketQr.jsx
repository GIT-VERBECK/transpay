import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTicketDetail } from '../data/mockTickets';
import '../styles/ticket-detail.css';

export default function TicketQr() {
  const { ticketId } = useParams();
  const t = getTicketDetail(ticketId ?? 'tk1');
  const isUsed = Boolean(t.used);

  const handleShare = () => {
    const text = `${t.heading} ${t.code} · ${t.from} → ${t.to}`;
    if (navigator.share) {
      navigator.share({ title: 'TransPay', text }).catch(() => {});
    }
  };

  return (
    <div className="ticket-qr-page">
      <header className="ticket-qr-header">
        <Link to="/accueil" className="ticket-qr-brand">
          TransPay
        </Link>
        <Link
          to="/librairie"
          aria-label="Fermer"
          style={{ color: '#6b7280', fontSize: '1.15rem' }}
        >
          <i className="bi bi-x-lg" />
        </Link>
      </header>

      <div className="ticket-qr-head-block">
        <p className="ticket-qr-role">{t.passengerRole}</p>
        <div className="ticket-qr-title-row">
          <h1 className="ticket-qr-title">{t.heading}</h1>
          <span
            className={`ticket-qr-badge ${isUsed ? 'ticket-qr-badge--used' : ''}`}
          >
            <i className="bi bi-check-lg" aria-hidden />
            {isUsed ? 'Utilisé' : 'Valide'}
          </span>
        </div>
      </div>

      <div className="ticket-card-wrap">
        <div className="ticket-upper">
          <div className="ticket-route-bar">
            <div className="ticket-route-bar__col">
              <p className="ticket-route-bar__lbl">{t.fromLabel}</p>
              <p className="ticket-route-bar__place">{t.from}</p>
            </div>
            <i className="bi bi-arrow-right ticket-route-bar__arrow" aria-hidden />
            <div className="ticket-route-bar__col ticket-route-bar__col--end">
              <p className="ticket-route-bar__lbl">{t.toLabel}</p>
              <p className="ticket-route-bar__place">{t.to}</p>
            </div>
          </div>

          <div className="ticket-passenger-row">
            <span className="ticket-avatar">{t.initials}</span>
            <span className="ticket-passenger-name">{t.passenger}</span>
          </div>

          <div className="ticket-qr-box">
            <div className="ticket-qr-frame">
              <img src={t.qrUrl} alt={`QR code ${t.code}`} width={128} height={128} />
            </div>
            <p className="ticket-code">{t.code.replace(/-/g, ' - ')}</p>
          </div>
        </div>

        <div className="ticket-perf" aria-hidden>
          <span className="ticket-perf__notch-left" />
          <span className="ticket-perf__notch-right" />
        </div>

        <div className="ticket-lower">
          <div className="ticket-meta-grid">
            <div>
              <p className="ticket-grid__k">Date</p>
              <p className="ticket-grid__v">{t.date}</p>
            </div>
            <div className="ticket-grid__cell--right">
              <p className="ticket-grid__k">Heure</p>
              <p className="ticket-grid__v">{t.time}</p>
            </div>
            <div className="ticket-meta-grid__row2-left">
              <p className="ticket-grid__k">Type</p>
              <p className="ticket-grid__v">{t.type}</p>
            </div>
            <div className="ticket-meta-grid__row2-right">
              <p className="ticket-grid__k">Prix</p>
              <p className="ticket-grid__v ticket-grid__v--price">
                {t.price} {t.currency}
              </p>
            </div>
          </div>

          <div className="ticket-note">
            <i className="bi bi-info-circle-fill" aria-hidden />
            <span>{t.note}</span>
          </div>

          <div className="ticket-actions">
            <button type="button" className="ticket-btn-share" onClick={handleShare}>
              <i className="bi bi-share" aria-hidden />
              Partager le ticket
            </button>
            <button type="button" className="ticket-btn-pdf">
              <i className="bi bi-download" aria-hidden />
              Enregistrer en PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
