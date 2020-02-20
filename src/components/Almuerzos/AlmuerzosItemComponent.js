import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const AlmuerzosItemComponent = ({ almuerzo, showOrderAlmuerzo}) => {
    return (
        <div className = "almuerzos-item text-center">
            <div>
                <Typography variant="h2">{almuerzo.nombre}</Typography>
                <Button onClick = { () => { showOrderAlmuerzo(almuerzo) } } >
                Ordenar !
                </Button>
            </div>
            
            <p>{almuerzo.descripcion}</p>
            
        </div>
    );
};
export default AlmuerzosItemComponent;