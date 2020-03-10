import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from './Autocomplete';

it('Autocomplete renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Autocomplete />, div);
    ReactDOM.unmountComponentAtNode(div);
});
