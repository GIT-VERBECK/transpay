import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../componements/Button';
import Card from '../componements/Card';
import Input from '../componements/Input';
import TopAppBar from '../componements/TopAppBar';
import '../styles/design-system.css';

export default function DesignSystem() {
  return (
    <div className="app-page ds-page">
      <TopAppBar
        title="Design system"
        border
        right={
          <Link
            to="/accueil"
            style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)' }}
          >
            Fermer
          </Link>
        }
      />
      <p className="ds-intro">
        Aperçu des fondations UI TransPay (couleurs, typo, composants de base).
        Équivalent pratique de la section « Component Library » Figma — réservé
        à la cohérence produit et aux revues avant intégration.
      </p>

      <section className="ds-section" aria-labelledby="ds-colors">
        <h2 id="ds-colors">Couleurs</h2>
        <div className="ds-swatches">
          <div className="ds-swatch" style={{ background: 'var(--color-primary)' }}>
            <span style={{ color: '#291d00' }}>Primary</span>
            <code style={{ color: '#291d00' }}>--color-primary</code>
          </div>
          <div
            className="ds-swatch"
            style={{ background: 'var(--color-primary-login)' }}
          >
            <span style={{ color: '#1e1b16' }}>Login accent</span>
            <code style={{ color: '#1e1b16' }}>--color-primary-login</code>
          </div>
          <div className="ds-swatch" style={{ background: 'var(--color-text-strong)' }}>
            <span style={{ color: '#fff' }}>Text strong</span>
            <code style={{ color: '#e2e8f0' }}>--color-text-strong</code>
          </div>
          <div className="ds-swatch" style={{ background: 'var(--color-tertiary)' }}>
            <span style={{ color: '#fff' }}>Success</span>
            <code style={{ color: '#e2e8f0' }}>--color-tertiary</code>
          </div>
          <div className="ds-swatch" style={{ background: 'var(--color-input-login-bg)' }}>
            <span>Input login</span>
            <code>--color-input-login-bg</code>
          </div>
          <div className="ds-swatch" style={{ background: 'var(--color-input-register-bg)' }}>
            <span>Input register</span>
            <code>--color-input-register-bg</code>
          </div>
        </div>
      </section>

      <section className="ds-section" aria-labelledby="ds-type">
        <h2 id="ds-type">Typographie</h2>
        <div className="ds-type-sample">
          <h3>Manrope — titres</h3>
          <p>Inter — texte courant et formulaires</p>
        </div>
      </section>

      <section className="ds-section" aria-labelledby="ds-actions">
        <h2 id="ds-actions">Actions</h2>
        <div className="ds-row">
          <Button variant="primary">Primaire</Button>
          <Button variant="primary" loginPrimary>
            Login
          </Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="success">Succès</Button>
        </div>
      </section>

      <section className="ds-section" aria-labelledby="ds-inputs">
        <h2 id="ds-inputs">Champs</h2>
        <div style={{ maxWidth: 320 }}>
          <Input variant="login" label="Login" placeholder="Crème" />
          <Input variant="register" label="Register" placeholder="Gris" />
        </div>
      </section>

      <section className="ds-section" aria-labelledby="ds-cards">
        <h2 id="ds-cards">Cartes</h2>
        <Card
          title="Carte exemple"
          subtitle="Sous-titre"
          icon={<i className="bi bi-star-fill" />}
        >
          Contenu slot pour listes ou métadonnées.
        </Card>
      </section>

      <p className="ds-note">
        Route interne <code>/design-system</code> — non listée dans la navigation
        publique.
      </p>
    </div>
  );
}
