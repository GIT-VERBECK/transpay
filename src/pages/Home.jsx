import React from 'react';
import { Link } from 'react-router-dom';
import TopAppBar from '../componements/TopAppBar';
export default function Home() {
  return (
    <div className="app-page">
      <TopAppBar brand border />
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__overlay" aria-hidden />
        <div className="home-hero__inner">
          <h2 id="home-hero-title" className="home-hero__title">
            Paiement de transport simplifié à Goma
          </h2>
          <p className="home-hero__sub">
            Évitez les tracas de monnaie. Payez vos trajets en bus, taxi et moto
            instantanément avec votre téléphone.
          </p>
          <Link to="/trajets" className="home-hero__cta">
            <span>Trouver un trajet</span>
            <i className="bi bi-arrow-right" aria-hidden />
          </Link>
        </div>
      </section>

      <div className="bento-grid">
        <article className="bento-card">
          <div className="bento-card__icon" aria-hidden>
            <i className="bi bi-lightning-charge-fill" />
          </div>
          <h3 className="bento-card__title">Paiement rapide</h3>
          <p className="bento-card__text">
            Payez en moins de 3 secondes par QR code ou numéro de téléphone sans
            attendre la monnaie.
          </p>
        </article>
        <article className="bento-card">
          <div className="bento-card__icon" aria-hidden>
            <i className="bi bi-shield-lock" />
          </div>
          <h3 className="bento-card__title">Sécurité</h3>
          <p className="bento-card__text">
            Chaque transaction est sécurisée et tracée. Votre argent est protégé
            par un chiffrement de bout en bout.
          </p>
        </article>
        <article className="bento-card">
          <div className="bento-card__icon" aria-hidden>
            <i className="bi bi-ticket-perforated" />
          </div>
          <h3 className="bento-card__title">Ticket numérique</h3>
          <p className="bento-card__text">
            Plus de reçus en papier. Retrouvez tous vos tickets dans votre
            historique et la Librairie.
          </p>
        </article>
      </div>

      <div className="cta-dual" style={{ marginTop: '1.25rem' }}>
        <div className="cta-card cta-card--driver">
          <h3 className="cta-card__title">Chauffeur ?</h3>
          <p className="cta-card__text">
            Digitalisez vos paiements et augmentez votre sécurité en évitant le
            cash.
          </p>
          <Link to="/register" className="cta-card__link">
            Créer un compte pro
            <i className="bi bi-arrow-right" aria-hidden />
          </Link>
          <div className="cta-card__deco" aria-hidden>
            <i className="bi bi-bus-front" />
          </div>
        </div>
        <div className="cta-card cta-card--wallet">
          <h3 className="cta-card__title">Recharger</h3>
          <p className="cta-card__text">
            Ajoutez des fonds via Mobile Money pour ne jamais être bloqué en
            chemin.
          </p>
          <Link to="/paiement" className="cta-card__link">
            Ajouter des fonds
            <i className="bi bi-arrow-right" aria-hidden />
          </Link>
          <div className="cta-card__deco" aria-hidden>
            <i className="bi bi-wallet2" />
          </div>
        </div>
      </div>

      <Link
        to="/trajets"
        className="fab-main"
        aria-label="Voir les trajets disponibles"
      >
        <i className="bi bi-plus-lg" aria-hidden />
      </Link>
    </div>
  );
}
