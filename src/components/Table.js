import React from "react";


function Table(props) {
    return (
        <div>

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
                <tbody>
                    {props.results.map((employee) => {
                        return (
                            <tr key={employee.login.username}>
                                <td><img src={employee.picture.thumbnail} alt=""></img></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default Table;