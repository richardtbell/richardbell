import React from 'react';
import PropTypes from 'prop-types';

const BulletedList = ({items, title}) => (
    <div>
        <h2>{title}</h2>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
);

BulletedList.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default BulletedList;