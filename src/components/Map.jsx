import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.426761,
    lng: -99.1718792,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCRItw3ldgXpKiq2Bru3eZarLiTT9cf8OM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
