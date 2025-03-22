import { createContext, useContext, ReactNode } from 'react';

// Define the property type
export type Property = {
  id: number;
  image: string;
  title: string;
  location: string;
  type: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  description: string;
  images: string[];
  features: string[];
  amenities: string[];
};

// Property data
const properties: Property[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        title: 'Modern City Apartment',
        location: 'Downtown, New York',
        type: 'Apartment',
        price: 450000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        description: 'Luxurious modern apartment in the heart of New York City. Features high-end finishes, floor-to-ceiling windows, and stunning city views.',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80',
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
        ],
        features: [
            'Modern Kitchen',
            'Central Air',
            'Hardwood Floors',
            'In-unit Laundry',
            'Fitness Center',
            'Parking Space',
        ],
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ]
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
        title: 'Suburban Family Home',
        location: 'Beverly Hills, LA',
        type: 'House',
        price: 1200000,
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        description: 'Luxurious family home in the suburbs with spacious backyard, modern amenities, and excellent school district.',
        images: [
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80',
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
        ],
        features: [
            'Modern Kitchen',
            'Central Air',
            'Hardwood Floors',
            'In-unit Laundry',
            'Fitness Center',
            'Parking Space',
        ],
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ]
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
        title: 'Development Plot',
        location: 'Austin, Texas',
        type: 'Land',
        price: 750000,
        area: 5000,
        description: 'Prime development land in growing Austin area. Perfect for commercial or residential development with all utilities available at site.',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80',
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
        ],
        features: [
            'Flat Terrain',
            'Road Access',
            'Water Connection',
            'Electricity Available',
            'Permits Ready',
            'Zoned for Mixed Use',
        ],
        amenities: [
            'Near Schools',
            'Near Shopping',
            'Public Transit',
            'Highway Access',
        ]
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        title: 'Office Space',
        location: 'Financial District, NYC',
        type: 'Commercial',
        price: 2500000,
        area: 3800,
        description: 'Premium office space in NYC Financial District. Open floor plan with executive offices, conference rooms, and reception area.',
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80',
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
        ],
        features: [
            'Private Offices',
            'Conference Rooms',
            'Reception Area',
            'Kitchen',
            'High-speed Internet',
            'Elevators',
        ],
        amenities: [
            'Parking Garage',
            '24/7 Security',
            'Building Maintenance',
            'Janitorial Services',
        ]
    },
];

// Create a context type
type PropertiesContextType = {
  properties: Property[];
  getPropertyById: (id: number) => Property | undefined;
};

// Create the context
const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

// Create a provider component
export function PropertiesProvider({ children }: { children: ReactNode }) {
  const getPropertyById = (id: number) => {
    return properties.find(property => property.id === id);
  };

  return (
    <PropertiesContext.Provider value={{ properties, getPropertyById }}>
      {children}
    </PropertiesContext.Provider>
  );
}

// Custom hook to use the properties context
export function useProperties() {
  const context = useContext(PropertiesContext);
  if (context === undefined) {
    throw new Error('useProperties must be used within a PropertiesProvider');
  }
  return context;
}

// Export the properties array for direct import if needed
export { properties };