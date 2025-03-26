import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWater } from '../context/WaterContext';
import BookingSummary from '../components/BookingSummary';

const RAZORPAY_KEY_ID = 'rzp_test_uupDDxDobiy5a4';

export default function BookingDetails() {
  const { id } = useParams<{ id: string }>();
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
      amount: totalPrice * 100,
      currency: "INR",
      name: "palgharcity48",
      description: `Booking for ${place?.name}`,
      handler: function(response: any) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
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

        <div className="md:col-span-1">
          <BookingSummary
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            pickupService={pickupService}
            setPickupService={setPickupService}
            acceptTerms={acceptTerms}
            setAcceptTerms={setAcceptTerms}
            totalPrice={totalPrice}
            adultPrice={adultPrice}
            childPrice={childPrice}
            pickupPrice={pickupPrice}
            onPayment={handlePayment}
          />
        </div>
      </div>
    </div>
  );
}