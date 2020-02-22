import React from 'react';
import PropTypes from 'prop-types';
import AlmuerzosComponent from '../components/Almuerzos/AlmuerzosComponent';
import PerfilComponent from '../components/Perfil/PerfilComponent';
import './offeredMenus.css';
import  MapComponent from '../components/Map/MapComponent';




export class OfferedMenus extends React.Component{

    render(){
        const showOrderAlmuerzo = () =>(
            <PerfilComponent/>
          );
        return(
            <React.Fragment>
                
                <div id="detallesCocineroActual">
                <MapComponent id="googleMap"/>
                <PerfilComponent
                    usuario={{"nombre":"Pepito Perez"}}
                />
                <AlmuerzosComponent
                    almuerzos={[{"nombre":"a","descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius dictum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae leo nisi. Nunc orci erat, finibus pharetra pellentesque at, aliquet ut orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean velit quam, posuere eget faucibus sed, ullamcorper sed justo."},{"nombre":"b"}]}
                    showOrderAlmuerzo={showOrderAlmuerzo}
                />
                
                </div>
                
            </React.Fragment>
        );
    }
}