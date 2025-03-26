import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, Baby, Car, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWater } from '../context/WaterContext';

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
      prefill: { name, email, contact: phone },
      notes: { booking_date: selectedDate, adults, children, pickup_service: pickupService ? 'Yes' : 'No' },
      theme: { color: "#2563eb" }
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  if (!place) return <div className="text-center py-12">Booking not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold mb-4">{place.name}</h2>
          <Swiper modules={[Autoplay, Navigation, Pagination]} spaceBetween={16} slidesPerView={2} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }} className="rounded-lg">
            {place.images.map((image, index) => (
              <SwiperSlide key={index}><img loading="lazy" src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover rounded-lg" /></SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" required className="w-full px-4 py-2 border rounded-lg" />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone *" required className="w-full px-4 py-2 border rounded-lg mt-2" maxLength={10} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" required className="w-full px-4 py-2 border rounded-lg mt-2" />
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required className="w-full px-4 py-2 border rounded-lg mt-2" />
          <button onClick={handlePayment} disabled={!name || !phone || !email || !selectedDate || !acceptTerms} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mt-4">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
