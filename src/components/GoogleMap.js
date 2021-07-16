import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 
import { FaBeer } from "react-icons/fa"

  const containerStyle = {
    position: 'relative',  
    width: '50vw',
    height: '25vw'
  }
  
 const MapContainer = (props) => {  
    const bounds = new props.google.maps.LatLngBounds();    

      function setMarkers() {
        for (let i=0; i < props.points.length; i++) {
          if (isNaN(props.points[i].lat)) {
            i++
          } else { 
            bounds.extend(props.points[i]); 
          }
        }
        }

    return (
      <div className='map-container'> 
            <Map 
              google={props.google} 
              zoom={4} 
              style={containerStyle}
              initialCenter={{
                lat: 38.854885,
                lng: -98.081807
              }}
              icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
              bounds={bounds}
              >
              {setMarkers()}
              {props.breweries.map(bar => {
                return(
                  <Marker 
                    title={bar.name}
                    name={bar.name}
                    key={bar.id}
                    position={{
                      lat: bar.latitude,
                      lng: bar.longitude
                    }}
                    onClick={() => props.handleMarkers(bar)}
                    icon={{
                      url: "https://freepngimg.com/thumb/beer/1-beer-png-image.png",
                      anchor: new props.google.maps.Point(32,32),
                      scaledSize: new props.google.maps.Size(20,40)
                    }}
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
