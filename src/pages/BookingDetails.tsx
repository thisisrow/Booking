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
  const { id } = useParams<{ id: string }>();
  const { getWaterById } = useWater();
  const place = getWaterById(Number(id));

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pickupService, setPickupService] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const adultPrice = place ? place.price : 850;
  const childPrice = place ? place.price - 150 : 700;
  const pickupPrice = 300;

  const totalPrice = (adults * adultPrice) + (children * childPrice) + (pickupService ? pickupPrice : 0);

  if (!place) {
    return <div className="text-center py-12">Booking not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Gallery */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{place.name}</h2>
            <div className="space-y-4">
              <div className="col-span-2">
                <img loading="lazy" src={place.images[0]} alt="Main" className="w-full h-96 object-cover rounded-lg" />
              </div>
              <div>
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  className="rounded-lg"
                >
                  {place.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        loading="lazy"
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>

          {/* Attractions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Attractions</h2>
            <div className="grid grid-cols-2 gap-4">
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

          {/* Trip Info */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Trip Information</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="prose max-w-none">
                <h3>About the {place.type}</h3>
                <p>{place.about}</p>

                <p className="text font-bold mb-4">Amenities</p>
                <div className="grid grid-cols-2 gap-4">
                  {place.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer">What's the check-in/check-out time?</summary>
                <p className="mt-2 text-gray-600">Check-in is at 2 PM and check-out is at 11 AM.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer">Is breakfast included?</summary>
                <p className="mt-2 text-gray-600">Yes, breakfast is included in the room rate.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer">Do you offer airport transfers?</summary>
                <p className="mt-2 text-gray-600">Yes, we offer pickup and drop service for an additional fee.</p>
              </details>
            </div>
          </section>

          {/* Map */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(place.location)}&z=15&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>

        {/* Booking Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>

            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Adults */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                <div className="flex items-center space-x-4">
                  <Users className="w-5 h-5 text-gray-400" />
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                <div className="flex items-center space-x-4">
                  <Baby className="w-5 h-5 text-gray-400" />
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pickup Service */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="pickup"
                  checked={pickupService}
                  onChange={(e) => setPickupService(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="pickup" className="flex items-center text-sm text-gray-700">
                  <Car className="w-5 h-5 mr-2" />
                  Pickup & Drop Service (₹{pickupPrice})
                </label>
              </div>

              {/* Cost Breakdown */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Adults ({adults})</span>
                  <span>₹{adults * adultPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Children ({children})</span>
                  <span>₹{children * childPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Conv. Fee</span>
                  <span>₹0</span>
                </div>
                {pickupService && (
                  <div className="flex justify-between">
                    <span>Pickup & Drop</span>
                    <span>₹{pickupPrice}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}