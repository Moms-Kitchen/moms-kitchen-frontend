import React from 'react';
import './mySideBar.css';

class MySideBar extends React.Component{

    state = {
        stretched: false,
        width: '3vw'
    }

    sideBarClickedHandler = () => {
        if(this.state.stretched){
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

    const = <div className="mySideBarClass generic" onClick={this.sideBarClickedHandler} style={{width: this.state.width}}>
        side <br></br> bar <br></br> TODO
    </div>

    render(){
        return(
            
        )
    }
}

export default MySideBar;