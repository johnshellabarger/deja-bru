import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 


  const containerStyle = {
    position: 'relative',  
    width: '50%',
    height: '100%'
  }
  
  export class MapContainer extends Component {
    render() {
      const breweryData = this.props.breweries
    return (
    <div className='map-container'> 
          <Map 
            google={this.props.google} 
            zoom={4} 
            style={containerStyle}
            initialCenter={{
              lat: 38.854885,
              lng: -98.081807
            }}
            >
              
            {breweryData.map(bar => {
              return(
                <Marker 
                  position={{
                    lat: bar.latitude,
                    lng: bar.longitude
                  }}
                />
              )
            })}
  
          </Map>
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
