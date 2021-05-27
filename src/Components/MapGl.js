import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup} from 'react-map-gl';
import { List, Icon } from 'semantic-ui-react'



function MapGl({hotelDetail}) {
    const latitude= (parseFloat(hotelDetail.latitude))
    const longitude=(parseFloat(hotelDetail.longitude))

    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        width: "19vw",
        height: "35vh",
        zoom: 10
    }) ;
    
    const [selectedHotel, setSelectedHotel] = useState(null)

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape"){
                setSelectedHotel(null)
            }
        }
        window.addEventListener("keydown", listener)
        return()=> {
            window.removeEventListener("keydown", listener)
        }
    }, [])
    


    return (
        <div >
        <ReactMapGL  {...viewport}  
         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/hannabm/ckp5qfrgg24g019q89ehxktjf"
        onViewportChange={(viewport) => {setViewport(viewport)}} 
         >
       
           <Marker 
                mapStyle ="mapbox://styles/hannabm/ckp60y7l68cr917ph9ht0y7rg"
                latitude  = {latitude}
                longitude = {longitude} 
               >
         
                <button className = "marker-btn" onClick= {e => {
                    e.preventDefault()
                    setSelectedHotel(hotelDetail)
                }}
                  >
                    <List>
                        <List.Item icon='marker' />
    
                    </List>
                </button>
         
           </Marker>
           { selectedHotel ? (
                <Popup latitude={latitude} longitude={longitude}
                onClose={() => {
                    setSelectedHotel(null)
                }}
                > 
                    <div>
                        <h6>{hotelDetail.name}</h6>

                    </div>    
                </Popup>

           ) : null}
         </ReactMapGL> 
        

        </div>
      
      
    );
  }
  
  export default MapGl;