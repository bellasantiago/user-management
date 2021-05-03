import React, { Component } from "react"
import API from "../utils/API";
import Results from "../components/Results";
import Search from "../components/Search";


class Table extends Component {

    state = {
        employees: []
    };

    componentDidMount() {
        this.getEmployeeResults();
    }

    getEmployeeResults() {
        API.randomEmployee()
            .then(res => {
                this.setState({ employees: res.data.results });
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    
    
    render() {
        return (
            <div>
                <Search employees={this.state.employees}/>
                <br></br>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Employee</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <Results results={this.state.employees} />
                </table>
            </div>
        )
    }
}


export default Table;