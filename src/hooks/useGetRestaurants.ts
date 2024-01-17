'use client';

import { apiClient } from '@/lib/axios';
import { RestaurantTypes } from '@/types/restaurant';
import { useQuery } from '@tanstack/react-query';

const fetchRestaurantData = async (): Promise<RestaurantTypes[]> => {
  const response = await apiClient.get('restaurants/get/all');
  return response.data.businesses;
};

export const useGetRestaurants = () => {
  return useQuery({
    queryKey: ['restaurantData'],
    queryFn: fetchRestaurantData,
  });
};
