'use client';

import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapLoader from './mapLoader';
import { useGetRestaurants } from '@/hooks/useGetRestaurants';
import { RestaurantCard } from './restaurantCard';

type ViewPort = {
  latitude: number;
  longitude: number;
  zoom: number;
};

function CustomMap() {
  const [viewport, setViewport] = useState<ViewPort>();

  const { data: restaurants } = useGetRestaurants();
  console.log('restaurants', restaurants);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 12,
      });
    });
  }, []);
  return (
    <div className='w-screen h-screen relative'>
      {!viewport && <MapLoader />}
      {viewport && (
        <div>
          <Map
            mapLib={import('mapbox-gl')}
            initialViewState={{
              longitude: viewport.longitude,
              latitude: viewport.latitude,
              zoom: 12,
            }}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            style={{ width: '100vw', height: '100vh' }}
            mapStyle='mapbox://styles/mapbox/dark-v10'
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
              color='red'
            />

            {restaurants?.map((restaurant, index) => (
              <Marker
                key={index + 30}
                latitude={restaurant.coordinates.latitude}
                longitude={restaurant.coordinates.longitude}
              />
            ))}
          </Map>
          <div className='backdrop-blur-sm bg-white/25 p-4 absolute inset-y-0 right-0 w-1/4 h-6/6 text-center text-white flex flex-col align-center overflow-scroll'>
            <h1>
              Your Location: {viewport.latitude}, {viewport.longitude}
            </h1>
            {restaurants!.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                className='m-2'
                restaurant={restaurant}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomMap;
