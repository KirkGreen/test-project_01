import React from 'react';

const Search = (props) => {

    return (
        <div className="search_container">
            <input type="text" placeholder={"Поиск автора по имени"} onChange={event => props.onSearchChange(event)}/>
        </div>
    )
};

export default Search;