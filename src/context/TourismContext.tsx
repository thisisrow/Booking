import { createContext, useContext, ReactNode } from 'react';

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
  category: 'Fort' | 'Waterfall' | 'Tourist Attraction';
};

// Tourism data
const tourismSpots: TourismSpot[] = [
  // Forts
  {
    "id": 1,
    "name": "Shirgaon Fort",
    "location": "Shirgaon, Palghar",
    "description": "Historic coastal fort with panoramic sea views",
    "image": "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg",
      "https://images.pexels.com/photos/2832035/pexels-photo-2832035.jpeg",
      "https://images.pexels.com/photos/2832036/pexels-photo-2832036.jpeg"
    ],
    "bestTime": "October to February",
    "weather": "Moderate climate with pleasant winters",
    "coordinates": "19.7000° N, 72.7000° E",
    "about": "Shirgaon Fort is a historic coastal fortification that offers stunning views of the Arabian Sea. Built in the 16th century, it served as an important defensive structure.",
    "attractions": ["Sea View Point", "Ancient Architecture", "Watch Towers", "Temple Ruins"],
    "category": "Fort"
  },
  {
    "id": 2,
    "name": "Bhavangad Fort",
    "location": "Palghar District",
    "description": "Ancient hill fort with rich history",
    "image": "https://images.pexels.com/photos/2832037/pexels-photo-2832037.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832037/pexels-photo-2832037.jpeg",
      "https://images.pexels.com/photos/2832038/pexels-photo-2832038.jpeg",
      "https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg"
    ],
    "bestTime": "November to February",
    "weather": "Cool and pleasant during winter",
    "coordinates": "19.6500° N, 72.7500° E",
    "about": "Bhavangad Fort is a historic hill fort known for its strategic location and architectural beauty.",
    "attractions": ["Ancient Temple", "Water Cisterns", "Fortification Walls", "Scenic Views"],
    "category": "Fort"
  },
  {
    "id": 3,
    "name": "Kelve Fort",
    "location": "Kelve, Palghar",
    "description": "A fort overlooking the Arabian Sea",
    "image": "https://images.pexels.com/photos/2832040/pexels-photo-2832040.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832040/pexels-photo-2832040.jpeg",
      "https://images.pexels.com/photos/2832041/pexels-photo-2832041.jpeg",
      "https://images.pexels.com/photos/2832042/pexels-photo-2832042.jpeg"
    ],
    "bestTime": "November to March",
    "weather": "Pleasant with cool sea breeze",
    "coordinates": "19.7000° N, 72.8000° E",
    "about": "Kelve Fort is a coastal fort that offers scenic views of the Arabian Sea, popular for its historical significance and peaceful atmosphere.",
    "attractions": ["Sea View", "Historical Ruins", "Beach", "Trekking"],
    "category": "Fort"
  },
  {
    "id": 4,
    "name": "Kaldurg Fort",
    "location": "Near Palghar, Maharashtra",
    "description": "A hill fort known for its panoramic views",
    "image": "https://images.pexels.com/photos/2832043/pexels-photo-2832043.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832043/pexels-photo-2832043.jpeg",
      "https://images.pexels.com/photos/2832044/pexels-photo-2832044.jpeg",
      "https://images.pexels.com/photos/2832045/pexels-photo-2832045.jpeg"
    ],
    "bestTime": "October to March",
    "weather": "Moderate temperature with clear skies",
    "coordinates": "19.6800° N, 72.7600° E",
    "about": "Kaldurg Fort is a hill fort with expansive views, popular for hiking and its fortification ruins.",
    "attractions": ["Fort Ruins", "Scenic View", "Trekking Trail"],
    "category": "Fort"
  },
  {
    "id": 5,
    "name": "Asava Fort",
    "location": "Near Palghar, Maharashtra",
    "description": "A lesser-known fort with significant history",
    "image": "https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg",
      "https://images.pexels.com/photos/2832047/pexels-photo-2832047.jpeg",
      "https://images.pexels.com/photos/2832048/pexels-photo-2832048.jpeg"
    ],
    "bestTime": "November to February",
    "weather": "Pleasant and cool",
    "coordinates": "19.7000° N, 72.7800° E",
    "about": "Asava Fort is an ancient fort offering a peaceful escape with its rich historical past and panoramic views.",
    "attractions": ["Old Ruins", "Hiking", "Viewpoint"],
    "category": "Fort"
  },
  {
    "id": 6,
    "name": "Mahim Fort",
    "location": "Mahim, Mumbai",
    "description": "A coastal fort with a view of the Arabian Sea",
    "image": "https://images.pexels.com/photos/2832049/pexels-photo-2832049.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832049/pexels-photo-2832049.jpeg",
      "https://images.pexels.com/photos/2832050/pexels-photo-2832050.jpeg",
      "https://images.pexels.com/photos/2832051/pexels-photo-2832051.jpeg"
    ],
    "bestTime": "October to February",
    "weather": "Tropical climate with warm winters",
    "coordinates": "19.0500° N, 72.8500° E",
    "about": "Mahim Fort was built by the Portuguese to defend the region and offers a glimpse into the colonial past.",
    "attractions": ["Historical Fortifications", "Sea Views", "Walkable Areas"],
    "category": "Fort"
  },
  {
    "id": 7,
    "name": "Kohoj Fort",
    "location": "Palghar District, Maharashtra",
    "description": "A beautiful hill fort with trekking opportunities",
    "image": "https://images.pexels.com/photos/2832052/pexels-photo-2832052.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832052/pexels-photo-2832052.jpeg",
      "https://images.pexels.com/photos/2832053/pexels-photo-2832053.jpeg",
      "https://images.pexels.com/photos/2832054/pexels-photo-2832054.jpeg"
    ],
    "bestTime": "October to March",
    "weather": "Cool and windy during winters",
    "coordinates": "19.6000° N, 72.7000° E",
    "about": "Kohoj Fort is a hill fort located amidst lush green surroundings, ideal for trekking and history enthusiasts.",
    "attractions": ["Trekking", "Fort Ruins", "Scenic Views"],
    "category": "Fort"
  },
  {
    "id": 8,
    "name": "Asherigad Fort",
    "location": "Near Palghar, Maharashtra",
    "description": "A beautiful fort surrounded by nature",
    "image": "https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg",
      "https://images.pexels.com/photos/2832056/pexels-photo-2832056.jpeg",
      "https://images.pexels.com/photos/2832057/pexels-photo-2832057.jpeg"
    ],
    "bestTime": "November to February",
    "weather": "Moderate climate with cool temperatures",
    "coordinates": "19.7500° N, 72.7600° E",
    "about": "Asherigad Fort is a serene fort located amidst dense forests, perfect for nature lovers and history buffs.",
    "attractions": ["Scenic Views", "Fort Ruins", "Nature Trails"],
    "category": "Fort"
  },
  // Waterfalls
  {
    "id": 9,
    "name": "Waghoba Waterfall",
    "location": "Palghar District",
    "description": "Scenic waterfall surrounded by lush greenery",
    "image": "https://images.pexels.com/photos/2832040/pexels-photo-2832040.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832040/pexels-photo-2832040.jpeg",
      "https://images.pexels.com/photos/2832041/pexels-photo-2832041.jpeg",
      "https://images.pexels.com/photos/2832042/pexels-photo-2832042.jpeg"
    ],
    "bestTime": "July to September",
    "weather": "Monsoon season with heavy rainfall",
    "coordinates": "19.7200° N, 72.7800° E",
    "about": "Waghoba Waterfall is a beautiful natural cascade that comes alive during the monsoon season.",
    "attractions": ["Waterfall View Point", "Trekking Trails", "Photography Spots", "Picnic Areas"],
    "category": "Waterfall"
  },
  {
    "id": 10,
    "name": "Dabhosa Waterfall",
    "location": "Palghar District",
    "description": "Magnificent waterfall with natural pool",
    "image": "https://images.pexels.com/photos/2832043/pexels-photo-2832043.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832043/pexels-photo-2832043.jpeg",
      "https://images.pexels.com/photos/2832044/pexels-photo-2832044.jpeg",
      "https://images.pexels.com/photos/2832045/pexels-photo-2832045.jpeg"
    ],
    "bestTime": "July to October",
    "weather": "Monsoon and post-monsoon season",
    "coordinates": "19.8000° N, 72.8000° E",
    "about": "Dabhosa Waterfall is one of the most popular waterfalls in Palghar, known for its natural swimming pool and scenic beauty.",
    "attractions": ["Natural Pool", "Hiking Trails", "Bird Watching", "Cave Exploration"],
    "category": "Waterfall"
  },
  {
    "id": 11,
    "name": "Dhodhadi Waterfall (Padghe Waterfall)",
    "location": "Padghe, Palghar",
    "description": "A hidden gem surrounded by dense forest",
    "image": "https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg",
      "https://images.pexels.com/photos/2832047/pexels-photo-2832047.jpeg",
      "https://images.pexels.com/photos/2832048/pexels-photo-2832048.jpeg"
    ],
    "bestTime": "June to September",
    "weather": "Heavy monsoon rainfall",
    "coordinates": "19.6500° N, 72.7100° E",
    "about": "Dhodhadi Waterfall, also known as Padghe Waterfall, is tucked away in a dense forest and comes alive during the monsoon season.",
    "attractions": ["Secluded Waterfall", "Trekking", "Bird Watching", "Photography"],
    "category": "Waterfall"
  },
  {
    "id": 12,
    "name": "Sagave Waterfall",
    "location": "Sagave, Palghar",
    "description": "A peaceful waterfall surrounded by lush vegetation",
    "image": "https://images.pexels.com/photos/2832049/pexels-photo-2832049.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832049/pexels-photo-2832049.jpeg",
      "https://images.pexels.com/photos/2832050/pexels-photo-2832050.jpeg",
      "https://images.pexels.com/photos/2832051/pexels-photo-2832051.jpeg"
    ],
    "bestTime": "June to September",
    "weather": "Monsoon season with heavy rainfall",
    "coordinates": "19.6000° N, 72.7400° E",
    "about": "Sagave Waterfall is a tranquil destination offering a calm escape amidst nature’s beauty, especially during the monsoons.",
    "attractions": ["Waterfall", "Nature Walks", "Photography", "Picnic Areas"],
    "category": "Waterfall"
  },
  {
    "id": 13,
    "name": "Tandulwadi Waterfall",
    "location": "Tandulwadi, Palghar",
    "description": "A hidden waterfall amidst the forests",
    "image": "https://images.pexels.com/photos/2832052/pexels-photo-2832052.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832052/pexels-photo-2832052.jpeg",
      "https://images.pexels.com/photos/2832053/pexels-photo-2832053.jpeg",
      "https://images.pexels.com/photos/2832054/pexels-photo-2832054.jpeg"
    ],
    "bestTime": "June to September",
    "weather": "Monsoon season",
    "coordinates": "19.5500° N, 72.7600° E",
    "about": "Tandulwadi Waterfall is a peaceful and less crowded waterfall, ideal for nature lovers looking to explore hidden gems.",
    "attractions": ["Secluded Waterfall", "Trekking", "Photography", "Picnicking"],
    "category": "Waterfall"
  },
  {
    "id": 14,
    "name": "Kalmandavi Waterfall",
    "location": "Near Palghar, Maharashtra",
    "description": "Majestic waterfall surrounded by dense forests",
    "image": "https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg",
      "https://images.pexels.com/photos/2832056/pexels-photo-2832056.jpeg",
      "https://images.pexels.com/photos/2832057/pexels-photo-2832057.jpeg"
    ],
    "bestTime": "June to September",
    "weather": "Monsoon with heavy rainfall",
    "coordinates": "19.5800° N, 72.7200° E",
    "about": "Kalmandavi Waterfall is a stunning waterfall, particularly captivating during the monsoon season, surrounded by lush forests.",
    "attractions": ["Waterfall", "Trekking Trails", "Photography", "Nature Walks"],
    "category": "Waterfall"
  },
  // Tourist Attractions
  {
    "id": 15,
    "name": "Kelve Beach",
    "location": "Kelve, Palghar",
    "description": "Pristine beach with golden sand",
    "image": "https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg",
      "https://images.pexels.com/photos/2832047/pexels-photo-2832047.jpeg",
      "https://images.pexels.com/photos/2832048/pexels-photo-2832048.jpeg"
    ],
    "bestTime": "October to March",
    "weather": "Pleasant with moderate temperatures",
    "coordinates": "19.6000° N, 72.7300° E",
    "about": "Kelve Beach is known for its clean shoreline, golden sand, and peaceful atmosphere.",
    "attractions": ["Sunset Point", "Beach Activities", "Local Food Stalls", "Historic Temple"],
    "category": "Tourist Attraction"
  },
  {
    "id": 16,
    "name": "Tembhi Beach (Mahim Beach)",
    "location": "Mahim, Palghar",
    "description": "A serene beach perfect for relaxation",
    "image": "https://images.pexels.com/photos/2832058/pexels-photo-2832058.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832058/pexels-photo-2832058.jpeg",
      "https://images.pexels.com/photos/2832059/pexels-photo-2832059.jpeg",
      "https://images.pexels.com/photos/2832060/pexels-photo-2832060.jpeg"
    ],
    "bestTime": "November to February",
    "weather": "Mild winters",
    "coordinates": "19.6500° N, 72.7100° E",
    "about": "Tembhi Beach is a quiet beach where visitors can enjoy peaceful walks and scenic views.",
    "attractions": ["Quiet Beach", "Sunbathing", "Scenic Views", "Local Food"],
    "category": "Tourist Attraction"
  },
  {
    "id": 17,
    "name": "Shirgaon Beach",
    "location": "Shirgaon, Palghar",
    "description": "A serene beach with clear waters and golden sand",
    "image": "https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg",
      "https://images.pexels.com/photos/2832062/pexels-photo-2832062.jpeg",
      "https://images.pexels.com/photos/2832063/pexels-photo-2832063.jpeg"
    ],
    "bestTime": "October to February",
    "weather": "Cool and breezy winters",
    "coordinates": "19.6900° N, 72.7400° E",
    "about": "Shirgaon Beach is a peaceful retreat with a beautiful shoreline, ideal for a day of relaxation.",
    "attractions": ["Beach Walks", "Photography", "Sunsets", "Picnics"],
    "category": "Tourist Attraction"
  },
  {
    "id": 18,
    "name": "Kalmandavi Waterfall",
    "location": "Near Palghar, Maharashtra",
    "description": "Majestic waterfall surrounded by dense forests",
    "image": "https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg",
      "https://images.pexels.com/photos/2832056/pexels-photo-2832056.jpeg",
      "https://images.pexels.com/photos/2832057/pexels-photo-2832057.jpeg"
    ],
    "bestTime": "June to September",
    "weather": "Monsoon with heavy rainfall",
    "coordinates": "19.5800° N, 72.7200° E",
    "about": "Kalmandavi Waterfall is a stunning waterfall, particularly captivating during the monsoon season, surrounded by lush forests.",
    "attractions": ["Waterfall", "Trekking Trails", "Photography", "Nature Walks"],
    "category": "Tourist Attraction"
  },
  {
    "id": 19,
    "name": "Kelve Dam",
    "location": "Kelve, Palghar",
    "description": "A scenic dam surrounded by hills and lush greenery",
    "image": "https://images.pexels.com/photos/2832064/pexels-photo-2832064.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832064/pexels-photo-2832064.jpeg",
      "https://images.pexels.com/photos/2832065/pexels-photo-2832065.jpeg",
      "https://images.pexels.com/photos/2832066/pexels-photo-2832066.jpeg"
    ],
    "bestTime": "October to March",
    "weather": "Cool and pleasant",
    "coordinates": "19.7000° N, 72.7300° E",
    "about": "Kelve Dam is a serene spot for nature lovers, offering a scenic view of the surrounding hills.",
    "attractions": ["Scenic Views", "Photography", "Nature Walks", "Fishing"],
    "category": "Tourist Attraction"
  },
  {
    "id": 20,
    "name": "Kamare Dam",
    "location": "Kamare, Palghar",
    "description": "A peaceful dam with a picturesque landscape",
    "image": "https://images.pexels.com/photos/2832067/pexels-photo-2832067.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832067/pexels-photo-2832067.jpeg",
      "https://images.pexels.com/photos/2832068/pexels-photo-2832068.jpeg",
      "https://images.pexels.com/photos/2832069/pexels-photo-2832069.jpeg"
    ],
    "bestTime": "October to February",
    "weather": "Mild winters with cool winds",
    "coordinates": "19.7100° N, 72.7400° E",
    "about": "Kamare Dam offers a peaceful atmosphere with surrounding greenery, making it an ideal spot for a relaxing retreat.",
    "attractions": ["Scenic Views", "Photography", "Bird Watching", "Nature Walks"],
    "category": "Tourist Attraction"
  },
  {
    "id": 21,
    "name": "Goverdhan Eco Village",
    "location": "Palghar, Maharashtra",
    "description": "Eco-friendly village offering organic farming experience",
    "image": "https://images.pexels.com/photos/2832070/pexels-photo-2832070.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832070/pexels-photo-2832070.jpeg",
      "https://images.pexels.com/photos/2832071/pexels-photo-2832071.jpeg",
      "https://images.pexels.com/photos/2832072/pexels-photo-2832072.jpeg"
    ],
    "bestTime": "Year-round",
    "weather": "Pleasant and cool",
    "coordinates": "19.6000° N, 72.7100° E",
    "about": "Goverdhan Eco Village offers visitors a chance to experience sustainable living through organic farming and environmental conservation.",
    "attractions": ["Organic Farming", "Yoga Retreat", "Sustainable Living", "Nature Walks"],
    "category": "Tourist Attraction"
  },
  {
    "id": 22,
    "name": "Dhabosa Waterfall",
    "location": "Palghar District",
    "description": "Magnificent waterfall with natural pool",
    "image": "https://images.pexels.com/photos/2832043/pexels-photo-2832043.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832043/pexels-photo-2832043.jpeg",
      "https://images.pexels.com/photos/2832044/pexels-photo-2832044.jpeg",
      "https://images.pexels.com/photos/2832045/pexels-photo-2832045.jpeg"
    ],
    "bestTime": "July to October",
    "weather": "Monsoon and post-monsoon season",
    "coordinates": "19.8000° N, 72.8000° E",
    "about": "Dabhosa Waterfall is one of the most popular waterfalls in Palghar, known for its natural swimming pool and scenic beauty.",
    "attractions": ["Natural Pool", "Hiking Trails", "Bird Watching", "Cave Exploration"],
    "category": "Tourist Attraction"
  },
  {
    "id": 23,
    "name": "Kaldurg Trek",
    "location": "Kaldurg, Palghar",
    "description": "A thrilling trek to an ancient hill fort",
    "image": "https://images.pexels.com/photos/2832073/pexels-photo-2832073.jpeg",
    "images": [
      "https://images.pexels.com/photos/2832073/pexels-photo-2832073.jpeg",
      "https://images.pexels.com/photos/2832074/pexels-photo-2832074.jpeg",
      "https://images.pexels.com/photos/2832075/pexels-photo-2832075.jpeg"
    ],
    "bestTime": "November to February",
    "weather": "Cool and pleasant",
    "coordinates": "19.7500° N, 72.7400° E",
    "about": "Kaldurg Trek is an adventurous trek that leads to an ancient fort offering panoramic views of the surrounding landscape.",
    "attractions": ["Fort Ruins", "Trekking Trails", "Scenic Views", "Photography"],
    "category": "Tourist Attraction",
  },
];

// Create a context type
type TourismContextType = {
  tourismSpots: TourismSpot[];
  getTourismSpotById: (id: number) => TourismSpot | undefined;
  getFortSpots: () => TourismSpot[];
  getWaterfallSpots: () => TourismSpot[];
  getTouristAttractions: () => TourismSpot[];
};

// Create the context
const TourismContext = createContext<TourismContextType | undefined>(undefined);

// Create a provider component
export function TourismProvider({ children }: { children: ReactNode }) {
  const getTourismSpotById = (id: number) => {
    return tourismSpots.find(spot => spot.id === id);
  };

  const getFortSpots = () => {
    return tourismSpots.filter(spot => spot.category === 'Fort');
  };

  const getWaterfallSpots = () => {
    return tourismSpots.filter(spot => spot.category === 'Waterfall');
  };

  const getTouristAttractions = () => {
    return tourismSpots.filter(spot => spot.category === 'Tourist Attraction');
  };

  return (
    <TourismContext.Provider value={{ 
      tourismSpots, 
      getTourismSpotById,
      getFortSpots,
      getWaterfallSpots,
      getTouristAttractions
    }}>
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