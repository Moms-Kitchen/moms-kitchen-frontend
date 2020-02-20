import React from 'react';
import PropTypes from 'prop-types';
import EspecialidadesItemComponent from './EspecialidadesItemComponent'; 
//import './ListEspecialidades.css'
import { Card } from '@material-ui/core';

const EspecialidadesComponent = ({ especialidades }) => {
    console.log(especialidades);
    return (
        <React.Fragment>
            <div  className = "especialidades-list">

            {
                
                especialidades ? 
                    especialidades.map( (e, index) => 
                        <EspecialidadesItemComponent 
                            key = {e._id+index}
                            especialidad = {e}
                        />
                    )
                : <div></div>
            }
            </div>
        </React.Fragment>  
    );
};

export default EspecialidadesComponent;