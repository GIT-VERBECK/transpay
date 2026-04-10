import { Link, useNavigate } from 'react-router-dom';
import Button from '../componements/Button';
import Input from '../componements/Input';
import '../styles/register.css';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <div className="register-hero-blur" aria-hidden />
      <section className="register-intro" aria-labelledby="register-title">
        <h1 id="register-title" className="auth-title">
          Bienvenue
        </h1>
        <p className="auth-subtitle">
          Inscrivez-vous pour gérer vos courses.
        </p>
      </section>
      <div className="register-card">
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/accueil', { replace: true });
          }}
        >
          <Input
            variant="register"
            leadingIcon="person"
            label="Nom complet"
            placeholder="Jean-Pierre Kasongo"
            autoComplete="name"
          />
          <Input
            variant="register"
            label="Numéro de téléphone"
            isPhone
            phoneTrailing="verified"
            placeholder="000 000 000"
            helperText="Numéro vérifié localement"
            autoComplete="tel"
          />
          <Input
            variant="register"
            leadingIcon="lock"
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <Input
            variant="register"
            leadingIcon="shield-lock"
            label="Confirmer le mot de passe"
            type="password"
            placeholder="••••••••"
            showPasswordToggle={false}
            autoComplete="new-password"
          />
          <Button
            type="submit"
            variant="primary"
            style={{ width: '100%', marginTop: '0.5rem', borderRadius: '16px' }}
            trailing={<i className="bi bi-arrow-right" aria-hidden />}
          >
            S&apos;inscrire
          </Button>
        </form>
        <p className="register-switch">
          Déjà un compte ?{' '}
          <Link to="/login" className="register-link-login">
            Se connecter
          </Link>
        </p>
        <footer className="auth-footer auth-footer--register">
          <div className="dots-pagination dots-register" aria-hidden>
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Register;
