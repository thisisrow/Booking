import { Star, MapPin } from 'lucide-react';
import { waterParks } from '../context/WaterContext';
import TiltCard from '../components/TiltCard';

export default function WaterPark() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Water Park</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {waterParks.map((waterPark) => (
          <TiltCard>
          <div key={waterPark.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img loading="lazy" src={waterPark.image} alt={waterPark.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{waterPark.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {waterPark.location}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{waterPark.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">₹{waterPark.price}/night</p>
                <button
                  onClick={() => window.location.href = `/booking/${waterPark.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}