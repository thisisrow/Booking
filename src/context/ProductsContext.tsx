import { createContext, useContext, ReactNode } from 'react';

// Define the property type
export type Property = {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
};

const products: Property[] = [
  {
    id: 1,
    name: 'Luxury Beach Towel',
    price: 29.99,
    rating: 4.5,
    category: 'Bath',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Premium Bathrobe',
    price: 89.99,
    rating: 4.8,
    category: 'Bath',
    image: 'https://images.unsplash.com/photo-1585412459212-8def26f7e84c?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Scented Candle Set',
    price: 34.99,
    rating: 4.6,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1720514496161-914011a9ee02?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Luxury Pillow Set',
    price: 79.99,
    rating: 4.7,
    category: 'Bedding',
    image: 'https://images.unsplash.com/photo-1605794432120-f4bb5dc9067d?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Egyptian Cotton Sheets',
    price: 129.99,
    rating: 4.9,
    category: 'Bedding',
    image: 'https://plus.unsplash.com/premium_photo-1691367279381-0bc5f1048916?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Aromatherapy Diffuser',
    price: 49.99,
    rating: 4.4,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=400&h=400&fit=crop',
  },
];

const ProductsContext = createContext<Property[]>(products);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

