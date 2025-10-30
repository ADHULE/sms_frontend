// Importation des hooks et composants nécessaires
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../Services/EmployeeServices";

// Définition du composant principal
function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // Chargement des données si modification
  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error("Erreur lors du chargement de l'employé :", error);
        });
    }
  }, [id]);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };

    try {
      if (id) {
        await updateEmployee(id, employee);
        console.log("Employee updated:", employee);
      } else {
        const response = await createEmployee(employee);
        console.log("Employee created:", response.data);
      }
      navigate("/listEmployees");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const renderTitle = () => (
    <h2 className="text-center mt-3">
      {id ? "Update Employee" : "Add Employee"}
    </h2>
  );

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            {renderTitle()}
            <div className="card-body">
              <form onSubmit={saveOrUpdateEmployee}>
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
      <Footer />
    </>
  );
}

export default AddEmployee;
