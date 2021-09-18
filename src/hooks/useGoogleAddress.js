import { useState, useEffect } from 'react';
import axios from 'axios';

// No se pudo usar esto porque cobran 🤣
const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCRItw3ldgXpKiq2Bru3eZarLiTT9cf8OM`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
