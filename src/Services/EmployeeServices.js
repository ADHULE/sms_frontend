import axios from "axios";

// Base URL du backend Spring Boot
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// 1. Liste de tous les employés (GET)
export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

// ajouter un nouveau employé
export const createEmployee = (employees) =>
  axios.post(REST_API_BASE_URL, employees);

// Récupère un employé par son ID
export const getEmployeeById = (employeeId) =>
  axios.get(`${REST_API_BASE_URL}/${employeeId}`);

// Changer les informations d'un enmployé
export const updateEmployee = (employeeId, employee) =>
  axios.put(`REST_API_BASE_URL/${(employeeId, employee)}`);
