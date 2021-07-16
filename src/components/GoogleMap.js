import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 

  const containerStyle = {
    position: 'relative',  
    width: '50vw',
    height: '25vw'
  }
  
  export class MapContainer extends Component {
    render() {
      const handleMarkers = this.props.handleMarkers
      const breweryData = this.props.breweries
      // const points = breweryData.map(brewery => { return {
      //   lat: brewery.latitude,
      //   lng: brewery.longitude}
      // })
      // let bounds = this.props.google.maps.LatLngBounds();
      // for (let i=0; i < points.length; i++ ) {
      //   bounds.extend(points[i]);
      // }

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
                  key={bar.id}
                  position={{
                    lat: bar.latitude,
                    lng: bar.longitude
                  }}
                  onClick={() => handleMarkers(bar)}
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
