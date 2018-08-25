import React from 'react';
import PropTypes from 'prop-types'

// Renders an item list...
const MyList = ({items}) => (
    <ul>
        {items.map(i => (
            <li key={i}>{i}</li>
        ))}
    </ul>
);

MyList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default MyList;
