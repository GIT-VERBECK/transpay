import React from 'react';
import TopAppBar from '../componements/TopAppBar';
const TRANSACTIONS = [
  {
    id: '1',
    title: 'Birere · Ligne 12',
    meta: 'Aujourd’hui · 08:42 · M-Pesa',
    amount: 500,
    devise: 'FC',
    status: 'Payé',
  },
  {
    id: '2',
    title: 'Majengo · Himbi',
    meta: 'Hier · 17:05 · Airtel Money',
    amount: 300,
    devise: 'FC',
    status: 'Payé',
  },
  {
    id: '3',
    title: 'Lac Vert',
    meta: '10 avr. · 11:20 · Orange Money',
    amount: 800,
    devise: 'FC',
    status: 'Payé',
  },
];

export default function History() {
  return (
    <div className="app-page">
      <TopAppBar title="TransPay" border />

      <section className="history-hero" aria-label="Solde et statistiques">
        <i className="bi bi-graph-up-arrow history-hero__deco" aria-hidden />
        <p className="history-hero__label">Solde estimé</p>
        <p className="history-hero__balance">12 400 FC</p>
        <div className="history-stats">
          <div className="history-stat">
            <p className="history-stat__k">Trajets</p>
            <p className="history-stat__v">24</p>
          </div>
          <div className="history-stat">
            <p className="history-stat__k">Ce mois</p>
            <p className="history-stat__v">8</p>
          </div>
        </div>
      </section>

      <div className="history-section-head">
        <h2>Mouvements</h2>
        <button type="button" className="history-filter">
          Filtrer
          <i className="bi bi-chevron-down" aria-hidden />
        </button>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {TRANSACTIONS.map((tx) => (
          <li key={tx.id}>
            <div className="tx-card">
              <div className="tx-card__icon" aria-hidden>
                <i className="bi bi-bus-front" />
              </div>
              <div style={{ minWidth: 0 }}>
                <p className="tx-card__title">{tx.title}</p>
                <p className="tx-card__meta">{tx.meta}</p>
              </div>
              <div className="tx-card__amount">
                <strong>
                  {tx.amount} {tx.devise}
                </strong>
                <span>{tx.status}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
