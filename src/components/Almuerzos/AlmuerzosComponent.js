import React from 'react';
import PropTypes from 'prop-types';
import AlmuerzosItemComponent from './AlmuerzosItemComponent'; 
import './ListAlmuerzos.css'
import { Card } from '@material-ui/core';

const AlmuerzosComponent = ({ almuerzos, showOrderAlmuerzo }) => {
    console.log(almuerzos);
    return (
        <React.Fragment>
            <Card  className = "almuerzos-list">

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
            </Card>
        </React.Fragment>  
    );
};

export default AlmuerzosComponent;