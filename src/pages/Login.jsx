import Button from "../componements/Button";
import Input from "../componements/Input";
import "../styles/login.css";

function Login() {
  return (
    <section>
      <h1>Bienvenue</h1>
      <p>Connectez-vous pour gérer vos courses</p>
      <div style={{ marginTop: "1.8rem" }}>
        <Input
          label={"Numéro de téléphone"}
          isPhone={true}
          placeholder={"000000 000"}
        />
        <Input label={"Mot de passe"} type="password" />
      </div>
      <Button
        variant="primary"
        style={{ width: "100%", marginBottom: "1.2rem" }}
      >
        Se connecter
      </Button>
      <span id="textp">
        <p>
          Pas encore de compte ? <a href="#">Inscrivez-vous</a>
        </p>
      </span>
      <div>
        <hr />
        <div className="dots-pagination">
          <span className=" dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
      </div>
    </section>
  );
}

export default Login;
