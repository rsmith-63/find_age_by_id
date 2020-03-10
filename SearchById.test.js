import React from 'react';
import ReactDOM from 'react-dom';
import SearchById from './SearchById';

const searchFunc = () => console.log('search called');
it('SearchById renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchById info={ {
        suggestions: [
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
        ],
        search: searchFunc,

    }
    }/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
