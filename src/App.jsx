import React, { Component } from 'react';
import Navbar from './Components/NavBar.jsx';
import ListEmployeeComponent from './Modules/ListEmployeeComponent.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ListEmployeeComponent />
      </>
    );
  }
}

export default App;
