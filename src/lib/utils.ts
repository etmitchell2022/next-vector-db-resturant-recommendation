import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDistanceBetweenPoints(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): string {
  // Convert latitude and longitude from degrees to radians
  const deg2rad = (deg: number) => deg * (Math.PI / 180);
  const radLat1 = deg2rad(lat1);
  const radLon1 = deg2rad(lon1);
  const radLat2 = deg2rad(lat2);
  const radLon2 = deg2rad(lon2);

  // Radius of the Earth in miles (mean value)
  const earthRadiusMiles = 3958.8; // Approximately 3958.8 miles

  // Haversine formula
  const dLat = radLat2 - radLat1;
  const dLon = radLon2 - radLon1;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceMiles = earthRadiusMiles * c;

  if (distanceMiles < 0.1) {
    const distanceFeet = distanceMiles * 5280; // 1 mile = 5280 feet
    return `${distanceFeet.toFixed()} ft.`;
  } else {
    return `${distanceMiles.toFixed(2)} miles`;
  }
}
