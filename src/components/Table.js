import React from "react";


function Table(props) {
    const filterFunction = (employee) => {
        if (props.results === "") return true;
        if (props.results === employee.name.first) return true;
    }

    return (
        <div>

            <br></br>
            <table className="table table-dark table-sortable">
                <thead>
                    <tr>
                        <th scope="col">Employee</th>
                        <th scope="col" onClick={() => { props.results.sort() }} >First Name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.filter(filterFunction).map((employee) => {
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