'use client';

import Image from 'next/image';
import Map, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CustomMap from '../components/customMap';

export default function Home() {
  return (
    <div>
      <CustomMap />
      <h1>hello</h1>
    </div>
  );
}
