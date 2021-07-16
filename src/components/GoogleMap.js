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

      function setMarkers() {
        for (let i=0; i < props.points.length; i++) {
          if (isNaN(props.points[i].lat)) {
            i++
          } else { 
            bounds.extend(props.points[i]); 
          }
        }
        console.log(bounds)
        }

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
              {setMarkers()}
              {props.breweries.map(bar => {
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
                  })
                }
            </Map>
      </div>
    );
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
