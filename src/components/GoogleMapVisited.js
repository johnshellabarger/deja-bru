
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react' 


  const containerStyle = {
    position: 'relative',  
    width: '50vw',
    height: '25vw'
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
                    lat: 38.854885,
                    lng: -98.081807
                  }}
                  
                >

            {visitedBreweryData.map(bar => {
                return(
                    <Marker 
                      key={bar.id}    
                      position={{
                            lat: bar.latitude,
                            lng: bar.longitude
                        }}
                      icon={{
                          url: "https://freepngimg.com/thumb/beer/1-beer-png-image.png",
                          anchor: new this.props.google.maps.Point(32,32),
                          scaledSize: new this.props.google.maps.Size(20,40)
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
