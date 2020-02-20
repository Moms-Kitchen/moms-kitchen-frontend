import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const EspecialidadesItemComponent = ({ especialidad}) => {
    return (
        <div className = "especialidades-item text-center">
            <div>
                <Button onClick = { () => { } } >
                    <img src={especialidad.logo}/>
                </Button>
            </div>
            
        </div>
    );
};
export default EspecialidadesItemComponent;