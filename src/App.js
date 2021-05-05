import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Table from './components/Table.js';
import React, { Component } from "react"
import API from "./utils/API";
import Search from "./components/Search";


class App extends Component {
  constructor() {
    super();
    this.orderUsers = this.orderUsers.bind(this);
  }
  

  state = {
    employees: [],
    results: "",
    sorted: true
  };

  orderUsers() {
    if (this.state.sorted) {
      return this.state.employees.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }
  
    return this.state.employees.reverse((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }
  
  onSortChange = () => {
    const orderedUsers = this.orderUsers();
  
    this.setState({
      employees: orderedUsers,
      sorted: !this.state.order,
    });
  }

  componentDidMount() {
    this.getEmployeeResults();
  };

  getEmployeeResults() {
    API.randomEmployee()
      .then(res => {
        this.setState({
          employees: res.data.results
        });
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    this.setState({ results: event.target.value });
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
        <Table
          results={this.state.results}
          employees={this.state.employees}
          sorted={this.state.sorted}
          orderUsers={this.orderUsers}
        />
      </div>
    );
  }

}

export default App;
