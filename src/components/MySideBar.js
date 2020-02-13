import React from 'react';
import './mySideBar.css';

class MySideBar extends React.Component{

    state = {
        stretched: false, 
        width: '3vw'       
    }
     

    sideBarClickHandler = () => {
        console.log("before width: " + this.state.width + ", stretched: " + this.state.stretched);
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
        console.log("after width: " + this.state.width + ", stretched: " + this.state.stretched);
    }

    render(){
        return(
            <div className="mySideBarClass generic" onClick={this.sideBarClickHandler} style={{width: this.state.width}}>
                side <br></br> bar <br></br>TODO
            </div>
        )
    }
}

export default MySideBar;