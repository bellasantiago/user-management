import React from 'react';



function Search(props) {
    const handleFormSubmit = event => {
        event.preventdefault()
    }

    const handleInputChange = event => {
        event.preventdefault()
    }

    return (
            <form className="form-inline d-flex justify-content-center search">
                <input
                    className="form-control mr-sm-2"
                    value={props.search}
                    onChange={handleInputChange}
                    type="text"
                    id="employee"
                    placeholder="Search Table"
                    name="employee"
                    list="employees"
                />
                <datalist id="employees">
                    {props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
                <button 
                    type="submit" 
                    onClick={handleFormSubmit} 
                    className="btn btn-outline-success my-2 my-sm-0">
                    Search
                    </button>
            </form>
    )
}

export default Search;