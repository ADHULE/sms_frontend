// Importation des hooks et composants nécessaires
import React, { useEffect, useState } from "react"; // Hook pour gérer l'état local
import { useNavigate, useParams } from "react-router-dom"; // Hook pour la navigation entre pages
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { createEmployee, getEmployeeById } from "../Services/EmployeeServices"; // Fonction pour créer un employé via l'API

// Définition du composant principal
function AddEmployee() {
  // Déclaration des états pour les champs du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Hook pour rediriger l'utilisateur après soumission
  const navigate = useNavigate();
  const { id } = useParams();

  // mis à jour des informtions
  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  // Fonction pour réinitialiser les champs du formulaire
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  // Fonction appelée lors de la soumission du formulaire
  const saveEmployee = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Création de l'objet employé à envoyer
    const employee = { firstName, lastName, email };

    try {
      // Appel du service pour créer l'employé
      const response = await createEmployee(employee);
      console.log("Employee created:", response.data); // Affiche la réponse dans la console

      // Redirection vers la liste des employés
      navigate("/listEmployees");
    } catch (error) {
      // Gestion des erreurs
      //   console.error("Error creating employee:", error);
      alert("Failed to create employee. Please try again.");
    }
  };

  function updateTile() {
    if (id) {
      return <h2 className="text-center mt-3">Update employee</h2>;
    } else {
      return <h2 className="text-center mt-3">Add Employee</h2>;
    }
  }

  // Retour du JSX à afficher
  return (
    <>
      <NavBar /> {/* Barre de navigation */}
      <div className="container mt-4">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            {updateTile}

            <div className="card-body">
              {/* Formulaire d'ajout d'employé */}
              <form onSubmit={saveEmployee}>
                {/* Champ prénom */}
                <div className="form-group mb-3">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter a first name"
                    className="form-control"
                    required
                  />
                </div>

                {/* Champ nom */}
                <div className="form-group mb-3">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter a last name"
                    className="form-control"
                    required
                  />
                </div>

                {/* Champ email */}
                <div className="form-group mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter an email"
                    className="form-control"
                    required
                  />
                </div>

                {/* Boutons de soumission et de réinitialisation */}
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Pied de page */}
    </>
  );
}

// Exportation du composant pour utilisation ailleurs
export default AddEmployee;
