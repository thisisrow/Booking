import  { createContext, useContext, ReactNode } from 'react';

export type Water = {
    id: number;
    type: 'Resort' | 'Water Park' | 'Villas';
    name: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    images: string[];
    localAttractions: string[];
    activities: string[];
    about: string;
    amenities:string[];
    locationUrl: string;
};

const resorts: Water[] = [
    {
        id: 1,
        type: 'Resort',
        name: 'Mountain View Resort',
        location: 'Swiss Alps',
        price: 850,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
            'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80'
        ],
        localAttractions: ['Jungfraujoch', 'Lake Thun', 'Grindelwald Village'],
        activities: ['Skiing', 'Hiking', 'Snowboarding'],
        about: 'Mountain View Resort offers a luxurious escape in the heart of the Swiss Alps, surrounded by stunning snow-capped peaks and pristine alpine scenery.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Swiss+Alps'
    },
    {
        id: 2,
        type: 'Resort',
        name: 'Beachfront Paradise',
        location: 'Maldives',
        price: 1200,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80',
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
        ],
        localAttractions: ['Coral Reefs', 'Vaadhoo Island', 'Male City'],
        activities: ['Snorkeling', 'Diving', 'Beach Relaxation'],
        about: 'Beachfront Paradise is a tropical haven in the Maldives, offering crystal-clear waters, white sandy beaches, and unparalleled luxury.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Maldives'
    },
    {
        id: 3,
        type: 'Resort',
        name: 'Desert Oasis Resort',
        location: 'Dubai',
        price: 950,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
            'https://images.unsplash.com/photo-1526234362653-3b75be151dd2?w=800&q=80'
        ],
        localAttractions: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari'],
        activities: ['Camel Riding', 'Shopping', 'Fine Dining'],
        about: 'Desert Oasis Resort blends modern luxury with traditional Arabian charm, set against the backdrop of Dubais golden sands.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Dubai'
    },
    {
        id: 4,
        type: 'Resort',
        name: 'Tropical Paradise Resort',
        location: 'Bali',
        price: 780,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
            'https://images.unsplash.com/photo-1539367628448-704b1db2e4e2?w=800&q=80',
            'https://images.unsplash.com/photo-1524678606370-a2f0e366ad7d?w=800&q=80'
        ],
        localAttractions: ['Uluwatu Temple', 'Ubud Monkey Forest', 'Tanah Lot'],
        activities: ['Surfing', 'Yoga', 'Cultural Tours'],
        about: 'Tropical Paradise Resort in Bali offers a serene retreat amidst lush jungles, vibrant culture, and stunning beaches.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Bali'
    }
];

const waterParks: Water[] = [
    {
        id: 5,
        type: 'Water Park',
        name: 'Mountain Splash Park',
        location: 'Swiss Alps',
        price: 1,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
            'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80'
        ],
        localAttractions: ['Jungfraujoch', 'Lake Thun', 'Grindelwald Village'],
        activities: ['Water Slides', 'Wave Pool', 'Lazy River'],
        about: 'Mountain Splash Park combines alpine beauty with thrilling water attractions, perfect for families and adventure seekers.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Swiss+Alps'
    },
    {
        id: 6,
        type: 'Water Park',
        name: 'Ocean Wave Park',
        location: 'Maldives',
        price: 1200,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80',
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
        ],
        localAttractions: ['Coral Reefs', 'Vaadhoo Island', 'Male City'],
        activities: ['Water Slides', 'Snorkeling', 'Aqua Aerobics'],
        about: 'Ocean Wave Park in the Maldives offers a unique water park experience surrounded by turquoise lagoons and marine life.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Maldives'
    },
    {
        id: 7,
        type: 'Water Park',
        name: 'Desert Splash Park',
        location: 'Dubai',
        price: 950,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
            'https://images.unsplash.com/photo-1526234362653-3b75be151dd2?w=800&q=80'
        ],
        localAttractions: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari'],
        activities: ['Wave Pool', 'Water Coasters', 'Kids' ,'Splash Zone'],
        about: 'Desert Splash Park brings water fun to the desert, offering a refreshing escape with state-of-the-art water attractions.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Dubai'
    },
    {
        id: 8,
        type: 'Water Park',
        name: 'Tropical Wave Park',
        location: 'Bali',
        price: 780,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
            'https://images.unsplash.com/photo-1539367628448-704b1db2e4e2?w=800&q=80',
            'https://images.unsplash.com/photo-1524678606370-a2f0e366ad7d?w=800&q=80'
        ],
        localAttractions: ['Uluwatu Temple', 'Ubud Monkey Forest', 'Tanah Lot'],
        activities: ['Lazy River', 'Water Slides', 'Surf Simulator'],
        about: 'Tropical Wave Park in Bali offers a fun-filled water adventure surrounded by the islands natural beauty and culture.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Bali'
    }
];

const villas: Water[] = [
    {
        id: 9,
        type: 'Villas',
        name: 'Luxury Villa Estate',
        location: 'Tuscany',
        price: 1500,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1601919051950-81d9c4c9e97c?w=800&q=80'
        ],
        localAttractions: ['Florence Cathedral', 'Pisa Leaning Tower', 'Chianti Vineyards'],
        activities: ['Wine Tasting', 'Cooking Classes', 'Sightseeing'],
        about: 'Luxury Villa Estate in Tuscany offers an exquisite retreat with rolling hills, historic charm, and world-class amenities.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Tuscany'
    },
    {
        id: 10,
        type: 'Villas',
        name: 'Oceanfront Villa',
        location: 'Greek Islands',
        price: 2200,
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&q=80'
        ],
        localAttractions: ['Santorini Caldera', 'Mykonos Windmills', 'Acropolis of Rhodes'],
        activities: ['Swimming', 'Boat Tours', 'Sunset Watching'],
        about: 'Oceanfront Villa in the Greek Islands provides a luxurious seaside escape with breathtaking views and Mediterranean vibes.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Greek+Islands'
    },
    {
        id: 11,
        type: 'Villas',
        name: 'Mountain Retreat Villa',
        location: 'Swiss Alps',
        price: 1800,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=800&q=80',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
            'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80'
        ],
        localAttractions: ['Jungfraujoch', 'Lake Thun', 'Grindelwald Village'],
        activities: ['Skiing', 'Hiking', 'Photography'],
        about: 'Mountain Retreat Villa in the Swiss Alps offers a peaceful haven with stunning mountain views and cozy, upscale accommodations.',
        amenities: [
            'Swimming Pool',
            '24/7 Security',
            'Concierge Service',
            'Package Room',
        ],
        locationUrl: 'https://maps.google.com/?q=Swiss+Alps'
    }
];

// Create a context type
type WaterContextType = {
  resorts: Water[];
  waterParks: Water[];
  villas: Water[];
  getWaterById: (id: number) => Water | undefined;
};

// Create the context
const WaterContext = createContext<WaterContextType | undefined>(undefined);

// Create a provider component
export function WaterProvider({ children }: { children: ReactNode }) {
  const allWater = [...resorts, ...waterParks, ...villas];
  
  const getWaterById = (id: number) => {
    return allWater.find(item => item.id === id);
  };

  return (
    <WaterContext.Provider value={{ resorts, waterParks, villas, getWaterById }}>
      {children}
    </WaterContext.Provider>
  );
}

// Custom hook to use the water context
export function useWater() {
  const context = useContext(WaterContext);
  if (context === undefined) {
    throw new Error('useWater must be used within a WaterProvider');
  }
  return context;
}

// Export the arrays for direct import if needed
export { resorts, waterParks, villas };