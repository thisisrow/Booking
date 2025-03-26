import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, Baby, Car } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWater } from '../context/WaterContext';

export default function BookingDetails() {
  const { id } = useParams();
  const { getWaterById } = useWater();
  const place = getWaterById(Number(id));

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pickupService, setPickupService] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  if (!place) {
    return <div className="text-center py-12">Booking not found</div>;
  }

  const adultPrice = place.price || 850;
  const childPrice = (place.price || 850) - 150;
  const pickupPrice = 300;
  const totalPrice = adults * adultPrice + children * childPrice + (pickupService ? pickupPrice : 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Gallery */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{place.name}</h2>
            <img src={place.images[0]} alt="Main" className="w-full h-64 md:h-96 object-cover rounded-lg" />
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="rounded-lg mt-4"
            >
              {place.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Attractions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Local Attractions</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {place.localAttractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Activities</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {place.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Booking Summary */}
        <div className="relative md:sticky md:top-24">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* Adults */}
              <div className="flex items-center space-x-4">
                <Users className="w-5 h-5 text-gray-400" />
                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 border">-</button>
                <span>{adults}</span>
                <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 border">+</button>
              </div>

              {/* Children */}
              <div className="flex items-center space-x-4">
                <Baby className="w-5 h-5 text-gray-400" />
                <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 border">-</button>
                <span>{children}</span>
                <button onClick={() => setChildren(children + 1)} className="w-8 h-8 border">+</button>
              </div>

              {/* Pickup Service */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="pickup" checked={pickupService} onChange={(e) => setPickupService(e.target.checked)} />
                <label htmlFor="pickup" className="flex items-center text-sm">
                  <Car className="w-5 h-5 mr-2" /> Pickup & Drop (₹{pickupPrice})
                </label>
              </div>

              {/* Cost Breakdown */}
              <div className="border-t pt-4">
                <div className="flex justify-between"><span>Adults ({adults})</span><span>₹{adults * adultPrice}</span></div>
                <div className="flex justify-between"><span>Children ({children})</span><span>₹{children * childPrice}</span></div>
                {pickupService && <div className="flex justify-between"><span>Pickup & Drop</span><span>₹{pickupPrice}</span></div>}
                <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span>₹{totalPrice}</span></div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}