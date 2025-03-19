import React from 'react';
import { Award, Users, Globe, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About LuxStays</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover luxury accommodations handpicked for the discerning traveler. We provide exceptional
          stays with unparalleled service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, LuxStays has grown from a small startup to a leading luxury
            accommodation provider. Our mission is to offer unforgettable experiences in the world's
            most beautiful locations.
          </p>
          <p className="text-gray-600">
            We carefully select each property in our portfolio to ensure it meets our high standards
            of luxury, comfort, and service excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Award className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">Handpicked luxury properties</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Professional travel advisors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Properties worldwide</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">Safe and reliable process</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our service, from property selection to
              customer support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-600">
              We maintain the highest standards of integrity in all our dealings with customers and
              partners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously innovate to improve our services and enhance the customer experience.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience Luxury?</h2>
        <p className="text-gray-600 mb-6">
          Browse our collection of premium properties and start planning your next unforgettable stay.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
          Explore Properties
        </button>
      </div>
    </div>
  );
}