import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 

  const containerStyle = {
    position: 'relative',  
    width: '50vw',
    height: '25vw'
  }
  
 const MapContainer = (props) => {
    console.log(props.points)  
    const bounds = new props.google.maps.LatLngBounds();
    
    setTimeout(() => {  
      for (let i=0; i < props.points.length; i++) {
        if (props.points[i] === null) { 
          return false 
        } else { bounds.extend(props.points[i])}; 
      }}, 1000)

      console.log(bounds)

    return (
      <div className='map-container'> 
            <Map 
              google={props.google} 
              zoom={4} 
              style={containerStyle}
              initialCenter={{
                lat: 42.39,
                lng: -72.52
              }}
              bounds={bounds}
              >
              {props.breweries.map(bar => {
                if (bar.latitude)
                return(
                  <Marker 
                    key={bar.id}
                    position={{
                      lat: bar.latitude,
                      lng: bar.longitude
                    }}
                    onClick={() => props.handleMarkers(bar.name)}
                  />
                )
              })}
            </Map>
      </div>
    );
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
