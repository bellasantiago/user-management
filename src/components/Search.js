import React from 'react';

function Search(props) {

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
            <form className="form-inline d-flex justify-content-center search" onSubmit={handleFormSubmit}>
                <input
                    className="form-control mr-sm-2"
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    id="employee"
                    placeholder="Search Table"
                    name="employee"
                />
            </form>
    )
}

export default Search;