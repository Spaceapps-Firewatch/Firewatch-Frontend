
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import React from "react";

const containerStyle = {
    width: '1280px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng:-38.523
};

function Map(){
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY

    })
// eslint-disable-next-line
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map){
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)

    }, [])
// eslint-disable-next-line
    const onUnmount = React.useCallback(function callback(map){
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >

        </GoogleMap>
    ) : <></>
}

export default function Homepage(){
    return(
        <div>
            <Map/>
        </div>
    )
}
