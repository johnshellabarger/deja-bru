
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 


  const containerStyle = {
    position: 'relative',  
    width: '50%',
    height: '50%'
  }
  
  export class MapContainer extends Component {
      render() {
        const visitedBreweryData = this.props.visitedBreweries
    return (
    <>
        <div className='map-container'> 
            <Map 
                google={this.props.google} 
                zoom={4} 
                style={containerStyle}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                  }}
                >

            {visitedBreweryData.map(bar => {
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
        
    </>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
