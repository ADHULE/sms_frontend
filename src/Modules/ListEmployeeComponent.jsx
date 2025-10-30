import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../Services/EmployeeServices";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  // État local pour stocker la liste des employés
  const [employees, setEmployees] = useState([]);

  // Hook pour la navigation entre les pages
  const navigate = useNavigate();

  // useEffect se déclenche au montage du composant pour charger les employés
  useEffect(() => {
    getAllEmployees();
  }, []);

  // Fonction pour récupérer la liste des employés depuis le service
  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        // Mettre à jour la liste des employés avec les données reçues
        setEmployees(response.data);
      })
      .catch((error) => {
        // console.error("Erreur lors du chargement des employés :", error);
        alert("Impossible de charger la liste des employés."+error);
      });
  };

  // Fonction pour rediriger vers la page de modification d’un employé
  
  const updateEmployee = (id) => navigate(`/edit-employee/${id}`);

  // Fonction pour supprimer un employé
  const removeEmployee = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet employé ?")) {
      deleteEmployee(id)
        .then(() => {
          // Rafraîchir la liste après suppression
          getAllEmployees();
        })
        .catch((error) => {
          // console.error("Erreur lors de la suppression :", error);
          alert("Échec de la suppression de l'employé."+error);
        });
    }
  };

  // Rendu du composant
  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <h2 className="text-center mb-3">List of Employees</h2>

        {/* Bouton pour aller vers la page d’ajout d’un nouvel employé */}
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/add-employee")}
          >
            + Add Employee
          </button>
        </div>

        {/* Tableau d’affichage des employés */}
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col" colSpan="2" className="text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              // Message si aucun employé n'est disponible
              <tr>
                <td colSpan="6" className="text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Footer />
      </div>
    </>
  );
};

export default ListEmployeeComponent;
