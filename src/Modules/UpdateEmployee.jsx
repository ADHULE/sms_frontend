import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getEmployeeById } from "../Services/EmployeeServices";

const UpdateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID de l'employé depuis l'URL

  // Charge les données existantes de l'employé
  useEffect(() => {
    getEmployeeById(id)
      .then((response) => {
        const { firstName, lastName, email } = response.data;
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement de l'employé :", error);
      });
  }, [id]);

  // Soumission du formulaire
  const saveEmployee = (e) => {
    e.preventDefault();
    const updatedEmployee = { firstName, lastName, email };

    updateEmployee(id, updatedEmployee)
      .then(() => {
        navigate("/listEmployees");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
        alert("Échec de la mise à jour de l'employé.");
      });
  };

  // Réinitialise le formulaire
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center mt-3">Update Employee</h2>

            <div className="card-body">
              <form onSubmit={saveEmployee}>
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

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">
                    Update
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
    
    </>
  );
};

export default UpdateEmployee;
