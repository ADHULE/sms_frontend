import React from "react";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "32rem" }}>
        <h3 className="text-center mb-4"> Créer un compte</h3>

        <form>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label>Nom :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Entrez votre nom"
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label>Postnom :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Entrez votre postnom"
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label>Prénom :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Entrez votre prénom"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Email :</label>
            <input
              type="email"
              className="form-control"
              placeholder="Entrez votre adresse e-mail"
              required
            />
          </div>

          <div className="mb-3">
            <label>Mot de passe :</label>
            <input
              type="password"
              className="form-control"
              placeholder="Créez un mot de passe"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            S’inscrire
          </button>

          <div className="text-center text-muted mb-2">ou</div>

          <button
            type="button"
            className="btn btn-outline-danger w-100"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              width="20"
              height="20"
              className="me-2"
            />
            S’inscrire avec Google
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-primary">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
