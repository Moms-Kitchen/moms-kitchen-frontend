import React from 'react';
import PropTypes from 'prop-types';
import AlmuerzosComponent from '../components/Perfil/PerfilComponent';
import PerfilComponent from '../components/Perfil/PerfilComponent';



export class OfferedMenus extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div id="detallesCocineroActual">
                <PerfilComponent></PerfilComponent>
                <AlmuerzosComponent></AlmuerzosComponent>
                </div>
                
            </React.Fragment>
        );
    }
}