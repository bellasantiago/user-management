import React from "react";

function TableRender(props) {
    return (
       
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
    )
}

export default TableRender;