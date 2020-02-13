import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const AlmuerzosItemComponent = ({ almuerzo, showOrderAlmuerzo}) => {
    return (
        <div className = "almuerzos-item text-center">
            <Typography variant="h2">{almuerzo.nombre}</Typography>
            <p>{almuerzo.descripcion}</p>
            <Button onClick = { () => { showOrderAlmuerzo(almuerzo) } } >
            Ordenar !
            </Button>
        </div>
    );
};
export default AlmuerzosItemComponent;