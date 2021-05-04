import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Table from './components/Table.js';
import React, { Component } from "react"
import API from "./utils/API";
import Search from "./components/Search";

class App extends Component {

  state = {
    employees: [],
    results: "",
    sort: false
  };

  sort() {
    this.setState({ sort: !this.state.sort })
  }
  componentDidMount() {
    this.getEmployeeResults();
  }

  getEmployeeResults() {
    API.randomEmployee()
      .then(res => {
        this.setState({ 
          employees: res.data.results
        });
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ results: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Search 
        handleInputChange={this.handleInputChange}
        results={this.state.results} 
        employees={this.state.employees}
        />
        <Table results={this.state.results}
        employees={this.state.employees}/>
      </div>
    );
  }

}

export default App;
