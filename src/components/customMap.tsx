import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Badge } from './ui/badge';

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
          <div className='backdrop-blur-md bg-white/30 p-4 absolute inset-y-0 right-0 w-96 h-6/6 text-center text-white flex flex-col align-center'>
            <Card className='m-2'>
              <CardHeader>
                <CardTitle>Half Liter</CardTitle>
                <CardDescription>500ft</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-row justify-center'>
                <Badge className='m-2'>BBQ</Badge>
                <Badge className='m-2'>$$</Badge>
              </CardContent>
            </Card>
            <Card className='m-2'>
              <CardHeader>
                <CardTitle>Half Liter</CardTitle>
                <CardDescription>500ft</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-row justify-center'>
                <Badge className='m-2'>BBQ</Badge>
                <Badge className='m-2'>$$</Badge>
              </CardContent>
            </Card>
            <Card className='m-2'>
              <CardHeader>
                <CardTitle>Half Liter</CardTitle>
                <CardDescription>500ft</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-row justify-center'>
                <Badge className='m-2'>BBQ</Badge>
                <Badge className='m-2'>$$</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomMap;
