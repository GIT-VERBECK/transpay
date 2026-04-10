import { Link } from 'react-router-dom';
import Button from '../componements/Button';
import Input from '../componements/Input';
import '../styles/login.css';

function Login() {
  return (
    <section className="login-page" aria-labelledby="login-title">
      <h1 id="login-title" className="auth-title">
        Bienvenue
      </h1>
      <p className="auth-subtitle">
        Connectez-vous pour gérer vos courses.
      </p>
      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          variant="login"
          label="Numéro de téléphone"
          isPhone
          phoneTrailing="phone"
          placeholder="000 000 000"
          autoComplete="tel"
        />
        <Input
          variant="login"
          label="Mot de passe"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          variant="primary"
          loginPrimary
          style={{ width: '100%', marginTop: '0.5rem', borderRadius: '12px' }}
        >
          Se connecter
        </Button>
      </form>
      <p className="auth-switch">
        Pas encore de compte ?{' '}
        <Link to="/register" className="auth-link">
          S&apos;inscrire
        </Link>
      </p>
      <footer className="auth-footer auth-footer--login">
        <div className="dots-pagination dots-login" aria-hidden>
          <span className="dot dot1" />
          <span className="dot dot2" />
          <span className="dot dot3" />
        </div>
      </footer>
    </section>
  );
}

export default Login;
