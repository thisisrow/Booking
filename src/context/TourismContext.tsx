import React, { createContext, useContext, ReactNode } from 'react';

// Define the tourism spot type
export type TourismSpot = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  images: string[];
  bestTime: string;
  weather: string;
  coordinates: string;
  about: string;
  attractions: string[];
};

// Tourism data
const tourismSpots: TourismSpot[] = [
    {
        id: 1,
        name: 'Taj Mahal',
        location: 'Agra, India',
        description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
            'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
            'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800&q=80'
        ],
        bestTime: 'October to March',
        weather: 'Tropical with hot summers and mild winters',
        coordinates: '27.1751° N, 78.0421° E',
        about: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
        attractions: [
            'Main Mausoleum',
            'Mosque and Jawab',
            'Mughal Gardens',
            'Yamuna River View'
        ]
    },
    {
        id: 2,
        name: 'Eiffel Tower',
        location: 'Paris, France',
        description: 'A wrought-iron lattice tower on the Champ de Mars.',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
            'https://images.unsplash.com/photo-1502602898650-2c3013771132?w=800&q=80',
            'https://images.unsplash.com/photo-1541552560-2d47a8f2e8b8?w=800&q=80'
        ],
        bestTime: 'April to June, September to October',
        weather: 'Temperate with mild summers and cool winters',
        coordinates: '48.8584° N, 2.2945° E',
        about: 'The Eiffel Tower is a historic landmark in Paris, built by Gustave Eiffel\'s company for the 1889 World\'s Fair. It stands as a global symbol of France and romance.',
        attractions: [
            'Observation Decks',
            'Champ de Mars Park',
            'Seine River Views',
            'Nighttime Light Show'
        ]
    },
    {
        id: 3,
        name: 'Great Wall of China',
        location: 'Northern China',
        description: 'A series of fortifications made of stone, brick, and other materials.',
        image: 'https://images.unsplash.com/photo-1589371785581-2e7eecf79309?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1589371785581-2e7eecf79309?w=800&q=80',
            'https://images.unsplash.com/photo-1500829246861-2f0b32c0d9d9?w=800&q=80',
            'https://images.unsplash.com/photo-1602632001978-9c867c247307?w=800&q=80'
        ],
        bestTime: 'April to May, September to October',
        weather: 'Continental with cold winters and hot summers',
        coordinates: '40.4319° N, 116.5704° E',
        about: 'The Great Wall of China is a historic series of walls and fortifications built to protect Chinese states from various invaders, particularly the Mongols, starting in the 7th century BC.',
        attractions: [
            'Mutianyu Section',
            'Badaling Section',
            'Watchtowers',
            'Mountain Views'
        ]
    },
    {
        id: 4,
        name: 'Great Barrier Reef',
        location: 'Queensland, Australia',
        description: 'The worlds largest coral reef system, visible from outer space.',
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
            'https://images.unsplash.com/photo-1621863523183-5e7d513dd612?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        ],
        bestTime: 'June to November',
        weather: 'Tropical with wet and dry seasons',
        coordinates: '18.2871° S, 147.6992° E',
        about: 'The Great Barrier Reef is the world\'s largest coral reef system, stretching over 2,300 kilometers off the coast of Queensland, Australia. It\'s a UNESCO World Heritage site and home to thousands of marine species.',
        attractions: [
            'Coral Cayes',
            'Reef Diving and Snorkeling',
            'Whitsunday Islands',
            'Marine Wildlife Viewing'
        ]
    },
    {
        id: 5,
        name: 'Northern Lights',
        location: 'Iceland',
        description: 'Natural light display in the Earth sky, predominantly seen in high-latitude regions.',
        image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&q=80',
            'https://images.unsplash.com/photo-1602015792182-7d4b4a3b5d68?w=800&q=80',
            'https://images.unsplash.com/photo-1611929086329-3d0a8b77e381?w=800&q=80'
        ],
        bestTime: 'September to April',
        weather: 'Cold with long winters and short summers',
        coordinates: '64.9631° N, 19.0208° W',
        about: 'The Northern Lights, or Aurora Borealis, are a natural phenomenon caused by charged particles from the sun hitting gases in Earth\'s atmosphere. Iceland is one of the best places to witness this dazzling display.',
        attractions: [
            'Thingvellir National Park',
            'Jökulsárlón Glacier Lagoon',
            'Reykjavik Viewing Spots',
            'Golden Circle Route'
        ]
    },
    {
        id: 6,
        name: 'Venice',
        location: 'Veneto, Italy',
        description: 'Famous for its canals, Gothic architecture, and traditional gondolas.',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
            'https://images.unsplash.com/photo-1537572263231-4314a30d444f?w=800&q=80',
            'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80'
        ],
        bestTime: 'April to June, September to October',
        weather: 'Humid subtropical with hot summers and cool winters',
        coordinates: '45.4408° N, 12.3155° E',
        about: 'Venice is a city built on a lagoon in northeastern Italy, renowned for its unique canal system, historic architecture, and cultural heritage. It\'s a UNESCO World Heritage site famous for its art and history.',
        attractions: [
            'Grand Canal',
            'St. Mark\'s Basilica',
            'Doge\'s Palace',
            'Rialto Bridge'
        ]
    },
];

// Create a context type
type TourismContextType = {
  tourismSpots: TourismSpot[];
  getTourismSpotById: (id: number) => TourismSpot | undefined;
};

// Create the context
const TourismContext = createContext<TourismContextType | undefined>(undefined);

// Create a provider component
export function TourismProvider({ children }: { children: ReactNode }) {
  const getTourismSpotById = (id: number) => {
    return tourismSpots.find(spot => spot.id === id);
  };

  return (
    <TourismContext.Provider value={{ tourismSpots, getTourismSpotById }}>
      {children}
    </TourismContext.Provider>
  );
}

// Custom hook to use the tourism context
export function useTourism() {
  const context = useContext(TourismContext);
  if (context === undefined) {
    throw new Error('useTourism must be used within a TourismProvider');
  }
  return context;
}

// Export the tourism spots array for direct import if needed
export { tourismSpots };
