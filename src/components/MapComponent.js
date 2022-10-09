import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Popup, GeolocateControl, Marker ,NavigationControl, FullscreenControl } from "react-map-gl";
import { React, useState, useContext } from 'react';
import geoJson from "./chicago-parks.json";


const renderMarkers = (_markers, setTitle, setDescription, setIsFound, setHint) => {

  return(_markers.map(marker=>{
    if(marker.isFound=="True"){
      return(
        <Marker
          longitude={marker.lon}
          latitude={marker.lat}
          color={"#00FF00"}
          clickTolerance={true}
          onClick={() => {
            setTitle(marker.name);
            setDescription(marker.description);
            setHint(marker.hint);
            //setIsFound(marker.properties.isFound);
            console.log("Click");
          }
        }
        >
    
        </Marker>)
      }
      else{return(
        <Marker
        longitude={marker.lon}
        latitude={marker.lat}
          color={"#FF0000"}
          clickTolerance={true}
          onClick={() => {
            setTitle(marker.name);
            setDescription(marker.description);
            setHint(marker.hint);
            //setIsFound(marker.properties.isFound);
            console.log("Click");
          }}
          >
        </Marker>
      )
    }
  }))
}


function MapComponent() {
  const [lng, setLng] = useState(-74.093248);
  const [lat, setLat] =useState(4.629650);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hint, setHint] = useState("");
  const [isFound, setIsFound] = useState(false);
  

  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoicGF1bG9kaWF6IiwiYSI6ImNsOHo2aWdhZzAwNDEzbmwxdjhjcHQyZnoifQ.Gb-9D9534fspbPaPHqNSeA"
        style={{
          width: '400px',
          height: '50vh',
          borderRadius: "15px"
        }}
        initialViewState= {{
          longitude: lng,
          latitude: lat,
          zoom: 10
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={'click'}
      >
        {renderMarkers(geoJson.features, setTitle, setDescription, setIsFound,setHint)}

        <NavigationControl position="bottom-right"/>
        <FullscreenControl/>
        <GeolocateControl/>
      </Map>
      <div>
      <div className='row w-30 mx-auto pt-2'>
        
      </div>
      
        <h4 className='text-center'>
          {title}
        </h4>
        <h4 className='text-center'>
          {description}
        </h4>
        <h4 className='text-center'>
        {hint}  
        </h4>
      </div>
    </>
  );
}

export default MapComponent;