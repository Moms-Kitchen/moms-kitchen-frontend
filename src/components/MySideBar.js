import React from 'react';
import './mySideBar.css';
import { Redirect } from 'react-router-dom';

class MySideBar extends React.Component {

    state = {
        stretched: false,
        width: '3vw'
    }

    sideBarClickedHandler = () => {
        if (this.state.stretched) {
            this.setState({
                width: '3vw',
                stretched: false
            })
        } else {
            this.setState({
                width: '10vw',
                stretched: true
            })
        }
    }

    
    

    render() {      
        return (
            <div className="mySideBarClass generic" onClick={this.sideBarClickedHandler} style={{ width: this.state.width }}>
                <div className="SDBillingClass SDGeneric" onClick={this.toBilling}>
                    B
            </div>
                <div className="SDOrdersClass SDGeneric">
                    O
            </div>
                <div className="SDKitchenClass SDGeneric">
                    K
            </div>
                <div className="SDLogoutClass SDGeneric">
                    LO
            </div>
            </div>
            
        )
    }
}

export default MySideBar;