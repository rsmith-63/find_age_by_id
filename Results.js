import React from 'react';

const Results = (props) => {
    { console.log('Results props', props)}
    return (
        <div>
            {props.name != null ?
                <div>
                    <h1> Patient Name: {props.name}</h1>
                    <div> Patient Id: {props.patient}</div>
                    <div> Patient Age: {props.age}</div>

                </div> : null
            }
        </div>
    );
};

export default Results;
