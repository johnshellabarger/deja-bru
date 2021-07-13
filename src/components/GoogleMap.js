import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 



  const containerStyle = {
    position: 'relative',  
    width: '20%',
    height: '20%'
  }

export class MapContainer extends Component {
    
  render() {
    return (
    <div className='map-container'> 
        <Map google={this.props.google} zoom={14} style={containerStyle}>
            
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
        </Map>
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBMFX-e38gYrfDajmdx3X7Md8BuvtS3eKs')
})(MapContainer)
