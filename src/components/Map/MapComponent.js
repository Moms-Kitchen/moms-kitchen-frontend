import React from 'react';
import { Map,GoogleApiWrapper} from 'google-maps-react';

export class MapComponent extends React.Component{
    
    render(){
        const mapStyles ={width:'500px',height:'500px',display:'flex',position:'static'};
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
    
        );
    }
}
    

export default GoogleApiWrapper({
    apiKey:'AIzaSyAEmXgQ65zpsjsEAfNPP9mBAz-5zjnIZBw'
})(MapComponent);