import React from 'react';
import PropTypes from 'prop-types';
import AlmuerzosItemComponent from './AlmuerzosItemComponent';

const AlmuerzosComponent = ({ almuerzos, showOrderAlmuerzo }) => {
    console.log(almuerzos);
    return (
        
        <div className = "almuerzos-list sidebarContent">
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
    );
};

export default AlmuerzosComponent;