import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Table from './components/Table.js';
import React, { Component } from "react"
import API from "./utils/API";
import Search from "./components/Search";

class App extends Component {

  state = {
    employees: []
  };

  componentDidMount() {
    this.getEmployeeResults();
  }

  getEmployeeResults() {
    API.randomEmployee()
      .then(res => {
        this.setState({ 
          employees: res.data.results,
          results: res.data.results
        });
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  handleInputChange() {
    
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Search handleInputChange={this.handleInputChange} />
        <Table results={this.state.results}/>
      </div>
    );
  }

}

export default App;
