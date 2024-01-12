import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from 'react';

type ViewPort = {
  latitude: number;
  longitude: number;
  zoom: number;
};

function CustomMap() {
  const [viewport, setViewport] = useState<ViewPort>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 6,
      });
    });
  }, []);
  return (
    <div className='w-screen h-screen relative'>
      {viewport && (
        <div>
          <Map
            mapLib={import('mapbox-gl')}
            initialViewState={{
              longitude: -85,
              latitude: 40,
              zoom: 6,
            }}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            style={{ width: '100vw', height: '100vh' }}
            mapStyle='mapbox://styles/mapbox/dark-v10'
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
          <div className='backdrop-blur-md bg-white/30 p-8 w-[32rem] absolute top-10 right-10 h-3/6 rounded-lg'>
            <h1>
              Your Location: {`${viewport.latitude}, ${viewport.longitude}`}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomMap;
