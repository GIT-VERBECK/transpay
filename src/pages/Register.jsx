import Button from "../componements/Button";
import Input from "../componements/Input";
import '../styles/register.css'
function Register() {
  return (
    <section>
      <h1>Bienvenue</h1>
      <p>Inscrivez-vous pour gérer vos courses</p>
      <div style={{ marginTop: "1.8rem" }}>
        <Input label={"Nom complet"} placeholder={"Kiza Kambasu Faty"} />
        <Input
          label={"Numéro de téléphone"}
          isPhone={true}
          placeholder={"000000 000"}
        />
        <Input label={"Mot de passe"} type="password" />

        <Input label={"Confirme le mot de passe"} placeholder={"..........."} />
        <Button  variant="primary" style={{ width: "100%", marginBottom: "1.2rem" }}>S'inscrire</Button>
        <span id="textp"><p>Déja un compte ? <a href="#">Se connecter</a></p></span>
         <div>
        <hr />
        <div className="dots-pagination">
          <span className=" dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Register;
