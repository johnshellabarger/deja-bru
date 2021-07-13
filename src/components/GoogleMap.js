import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 
import { FaCentercode } from 'react-icons/fa';

  const containerStyle = {
    position: 'relative',  
    width: '50%',
    height: '50%'
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
