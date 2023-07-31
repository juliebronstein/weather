import React, { useEffect, useRef } from 'react';
import { container, item } from "../utils/Animate";
import { motion } from "framer-motion";
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import GoogleMapReact from 'google-map-react'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";
const MapShow = ({lat,lng}) => {
  const mapContainer = useRef(null);
const map = useRef(null);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: 13
  });
  });
    const defaultProps = {
        center: {
          lat: lat,
          lng: lng
        },
        zoom: 7
      };


    // "https://maps.googleapis.com/maps/api/js?key=&callback=initMap"
    return (
     
    //     <motion.div
    //   className=""
    //   variants={container}
    //   initial="hidden"
    //   animate="visible"
    // > 
    <>
<div className='weather-content  col-12 d-flex flex-column justify-content-center text-center p-3 g-3"'>
<div ref={mapContainer} className="map-container col-12" />
</div>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
         <div
          lat={latitude}
          lng={longitude}
          text="My Marker"
        /> 
      </GoogleMapReact> */}

    </>
    //  </motion.div>
 
    );
}

export default MapShow;
