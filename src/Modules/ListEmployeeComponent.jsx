import React, { useEffect, useState } from "react";
import { listEmployees } from "../Services/EmployeeServices";
import Footer from "../Components/Footer";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        alert("Erreur lors du chargement des employés :", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>List of Employees</h2>

      {/* les boutons pour naviguer vers les autres pages */}
     

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Employee number</th>
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee Email Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <th scope="row">{employee.id}</th>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default ListEmployeeComponent;
