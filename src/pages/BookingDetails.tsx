import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, Baby, Car, Map, Info } from 'lucide-react';

export default function BookingDetails() {
  const { id } = useParams();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pickupService, setPickupService] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const adultPrice = 850;
  const childPrice = 700;
  const pickupPrice = 300;

  const totalPrice = (adults * adultPrice) + (children * childPrice) + (pickupService ? pickupPrice : 0);

  const images = [
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80',
    'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Gallery */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img src={images[0]} alt="Main" className="w-full h-96 object-cover rounded-lg" />
              </div>
              <img src={images[1]} alt="Secondary" className="w-full h-48 object-cover rounded-lg" />
              <img src={images[2]} alt="Secondary" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </section>

          {/* Attractions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Attractions</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Local Attractions</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Beach Access</li>
                  <li>Shopping District</li>
                  <li>Historical Sites</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Activities</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Water Sports</li>
                  <li>Spa Services</li>
                  <li>Guided Tours</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Trip Info */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Trip Information</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="prose max-w-none">
                <h3>About the Resort</h3>
                <p>Experience luxury at its finest in our beachfront resort. Enjoy spectacular ocean views, world-class amenities, and impeccable service.</p>
                
                <h3 className="mt-4">Amenities</h3>
                <ul>
                  <li>Private beach access</li>
                  <li>Swimming pool</li>
                  <li>Spa and wellness center</li>
                  <li>24/7 room service</li>
                  <li>Free Wi-Fi</li>
                </ul>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5997798838537!2d77.64163611482186!3d12.838294990945693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a3e4e7127%3A0x949e1e57e8374e16!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647910745186!5m2!1sen!2sin"
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