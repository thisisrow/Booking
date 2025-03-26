import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, Baby, Car } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWater } from '../context/WaterContext';
const RAZORPAY_KEY_ID = 'rzp_test_uupDDxDobiy5a4';

export default function BookingDetails() {
  const { id } = useParams();
  const { getWaterById } = useWater();
  const place = getWaterById(Number(id));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pickupService, setPickupService] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const adultPrice = place ? place.price : 850;
  const childPrice = place ? place.price - 150 : 700;
  const pickupPrice = 300;

  const totalPrice = (adults * adultPrice) + (children * childPrice) + (pickupService ? pickupPrice : 0);

  const handlePayment = async () => {
    if (!name || !phone || !email || !selectedDate || !acceptTerms) {
      alert('Please fill in all required fields and accept terms & conditions');
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: totalPrice * 100, // Amount in paise
      currency: "INR",
      name: "palgharcity48",
      description: `Booking for ${place?.name}`,
      handler: function(response: any) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        // Here you would typically make an API call to your backend to verify and record the payment
      },
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      notes: {
        booking_date: selectedDate,
        adults: adults,
        children: children,
        pickup_service: pickupService ? 'Yes' : 'No'
      },
      theme: {
        color: "#2563eb"
      }
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  if (!place) {
    return <div className="text-center py-12">Booking not found</div>;
  }

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
               {/* Personal Information */}
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                  required
                  maxLength={10}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>


               {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
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

               {/* Terms and Conditions */}
               <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I accept the terms and conditions
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
                onClick={handlePayment}
                disabled={!name || !phone || !email || !selectedDate || !acceptTerms}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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