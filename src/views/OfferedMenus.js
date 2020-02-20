import React from 'react';
import PropTypes from 'prop-types';
import AlmuerzosComponent from '../components/Almuerzos/AlmuerzosComponent';
import PerfilComponent from '../components/Perfil/PerfilComponent';
import './offeredMenus.css';




export class OfferedMenus extends React.Component{

    render(){
        const showOrderAlmuerzo = () =>(
            <PerfilComponent/>
          );
        return(
            <React.Fragment>
                
                <div id="detallesCocineroActual">
                <PerfilComponent></PerfilComponent>
                <AlmuerzosComponent
                    almuerzos={[{"nombre":"a"},{"nombre":"b"}]}
                    showOrderAlmuerzo={showOrderAlmuerzo}
                />
                
                </div>
                
            </React.Fragment>
        );
    }
}