import React, { Component } from "react";

import NavBar from "./Components/NavBar.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home.jsx";
import ListEmployeeComponent from "./Modules/ListEmployeeComponent.jsx";
import AddNewEmployeeComponent from "./Modules/AddNewEmployeeComponent.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';


class App extends Component {
  render() {
    return (
      <>

        {/* configuration des liens de navigation entre les différentes pages */}

        <BrowserRouter>
          <Routes>
            {/* url principal http://localhost:3000 */}
            <Route path="/" element={<Home />}></Route>
            {/* url pour afficher la liste des employés */}
            <Route
              path="/listEmployees"
              element={<ListEmployeeComponent />}
            ></Route>
            {/* url pour ajouter un nouveau employé */}
            <Route
              path="/addEmployee"
              element={<AddNewEmployeeComponent />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
