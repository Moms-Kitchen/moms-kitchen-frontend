import React from 'react';
import PropTypes from 'prop-types';
import AlmuerzosItemComponent from './AlmuerzosItemComponent'; 
import './ListAlmuerzos.css'

const AlmuerzosComponent = ({ almuerzos, showOrderAlmuerzo }) => {
    console.log(almuerzos);
    return (
        <React.Fragment>
            <div className = "almuerzos-list">
            {
                
                almuerzos ? 
                    almuerzos.map( (a, index) => 
                        <AlmuerzosItemComponent 
                            key = {a._id+index}
                            almuerzo = {a}
                            showOrderAlmuerzo = {showOrderAlmuerzo}
                        />
                    )
                : <div></div>
            }
            
            
        </div>
        </React.Fragment>  
    );
};

export default AlmuerzosComponent;