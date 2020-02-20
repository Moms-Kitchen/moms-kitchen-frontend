import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Card } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import './PerfilComponent.css'
import EspecialidadesComponent from '../Especialidades/EspecialidadesComponent';


const PerfilComponent = ({ usuario }) => {
    return (
        <React.Fragment>
            <Card className="perfil">
                <div className="ratings">
                    <div>
                        <Avatar></Avatar>
                        <Typography>{usuario.nombre}</Typography>
                    </div>
                    <Rating></Rating>
                </div>
                <div className="especialidades">
                    <Typography>Especialidades:</Typography>
                    <EspecialidadesComponent
                        especialidades={[{"logo":"src/img/EspBlue.png"},{"logo":"src/img/EspRed.png"}]}
                    />
                </div>

            </Card>


        </React.Fragment>
    );
};

export default PerfilComponent;