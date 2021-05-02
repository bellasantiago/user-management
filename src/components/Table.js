import React, { Component } from "react"
import API from "../utils/API";
// import Results from "";


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
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;