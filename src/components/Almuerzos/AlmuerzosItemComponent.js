import React from 'react';
import PropTypes from 'prop-types';

const AlmuerzosItemComponent = ({ almuerzo, showEditAlmuerzo}) => {
    return (
        <div className = "almuerzos-item text-center">
            <h1>{almuerzo.nombre}</h1>
            <button onClick = { () => { showEditAlmuerzo(almuerzo) } } >
            Ordenar !
            </button>
        </div>
    );
};
export default AlmuerzosItemComponent;