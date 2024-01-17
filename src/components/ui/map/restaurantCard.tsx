import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../card';
import { Badge } from '../badge';
import { RestaurantTypes } from '@/types/restaurant';
import { calculateDistanceBetweenPoints } from '@/lib/utils';
import Image from 'next/image';

type RestaurantCardProps = {
  className: string;
  restaurant: RestaurantTypes;
};

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  className,
  restaurant,
}) => {
  const distanceFromUser = calculateDistanceBetweenPoints(
    39.7715642,
    -86.1546502,
    restaurant.coordinates.latitude,
    restaurant.coordinates.longitude
  );
  return (
    <Card className={className}>
      <CardHeader>
        <Image
          unoptimized
          src={restaurant.image_url}
          width={600}
          height={700}
          alt='Picture of restaurant'
          className='rounded-md'
        />
        <CardTitle className='text-start text-lg font-medium'>
          {restaurant.name}{' '}
          <span className='text-xs font-medium text-gray-500'>
            {distanceFromUser}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row items-center p-0 px-2 '>
        <span className='text-gray-400 text-sm text-start'>
          {restaurant.price}
        </span>
        <span className='w-1 h-1 bg-gray-500 rounded-full m-1'></span>
        {restaurant.categories.map((category, index) => (
          <>
            <p className='text-gray-500 text-sm' key={index}>
              {category.title}
            </p>
            {index !== restaurant.categories.length - 1 && (
              <span
                key={index + 10}
                className='w-1 h-1 bg-gray-500 rounded-full m-1'
              ></span>
            )}
          </>
        ))}
      </CardContent>
    </Card>
  );
};
