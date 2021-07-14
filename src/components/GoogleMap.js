import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 


  const containerStyle = {
    position: 'relative',  
    width: '50%',
    height: '50%'
  }
  
  export class MapContainer extends Component {
    render() {
      const breweryData = this.props.breweries
      console.log(breweryData)
    return (
    <div className='map-container'> 
          <Map google={this.props.google} zoom={14} style={containerStyle}>
              
          {breweryData.map((bar)=> console.log(bar))}              

      
              <InfoWindow onClose={this.onInfoWindowClose}>

              </InfoWindow>
          </Map>
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
