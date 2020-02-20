import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Card } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import './PerfilComponent.css'


const PerfilComponent = ({ usuario }) => {
    return (
        <React.Fragment>
            <Card className="perfil">
                {/* <div> */}
                    <div>
                        <Avatar></Avatar>
                        <Typography>{usuario.nombre}</Typography>
                    </div>
                    <Rating></Rating>
                {/* </div> */}
                {/* <div>
                    <Typography>Especialidades:</Typography>
                </div> */}

            </Card>


        </React.Fragment>
    );
};

export default PerfilComponent;