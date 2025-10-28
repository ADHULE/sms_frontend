import axios from "axios";

// Base URL du backend Spring Boot
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// 1. Liste de tous les employés (GET) 
export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

// 2. Afficher un employé par ID (GET) 
export const getEmployeeById = (employeeId) => {
  return axios.get(`${REST_API_BASE_URL}/${employeeId}`);
};

// 3. Ajouter un nouvel employé (POST) 
export const createEmployee = (employeeData) => {
  return axios.post(REST_API_BASE_URL, employeeData);
};

// 4. Modifier un employé existant (PUT) 
export const updateEmployee = (employeeId, employeeData) => {
  return axios.put(`${REST_API_BASE_URL}/${employeeId}`, employeeData);
};

// 5. Supprimer un employé (DELETE) 
export const deleteEmployee = (employeeId) => {
  return axios.delete(`${REST_API_BASE_URL}/${employeeId}`);
};
