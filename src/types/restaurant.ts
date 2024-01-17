export type RestaurantTypes = {
  name: string;
  rating: number;
  coordinates: { latitude: number; longitude: number };
  price: string;
  display_address: string;
  distance: number;
  categories: [{ alias: string; title: string }];
  image_url: string;
};
