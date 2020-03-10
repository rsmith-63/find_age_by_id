import React from 'react';
import Autocomplete from "./Autocomplete";


const SearchById = (props) => {
    return (
        <div>

            <h1>Find age by Id</h1>
            <h2>Start typing select a patient id!</h2>
            <Autocomplete
                suggestions={props.info.suggestions}
                search={props.info.search}
            />
            <span>  Hit return key to search! </span>


        </div>
    );
};

export default SearchById;

