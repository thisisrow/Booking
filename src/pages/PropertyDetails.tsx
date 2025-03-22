import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Square, Bath, Bed, Phone, Mail, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useProperties } from '../context/PropertiesContext';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const { getPropertyById } = useProperties();
  const property = getPropertyById(Number(id));

  if (!property) {
    return <div className="text-center py-12">Property not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{property.location}</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="mb-12">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-xl overflow-hidden"
        >
          {property.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img loading="lazy" src={image} alt={`${property.title} ${index + 1}`} className="w-full h-[500px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {property.bedrooms && (
                <div className="flex items-center">
                  <Bed className="w-5 h-5 text-blue-600 mr-2" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center">
                  <Bath className="w-5 h-5 text-blue-600 mr-2" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              )}
              <div className="flex items-center">
                <Square className="w-5 h-5 text-blue-600 mr-2" />
                <span>{property.area} sqft</span>
              </div>
            </div>
            <p className="text-gray-600">{property.description}</p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Contact Agent</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="I'm interested in this property..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}