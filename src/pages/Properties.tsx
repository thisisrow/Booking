import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Building, Landmark, Search, Filter, Square, Bath, Bed } from 'lucide-react';

const properties = [
  {
    id: 1,
    type: 'Apartment',
    title: 'Modern City Apartment',
    location: 'Downtown, New York',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    id: 2,
    type: 'House',
    title: 'Suburban Family Home',
    location: 'Beverly Hills, LA',
    price: 1200000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
  },
  {
    id: 3,
    type: 'Land',
    title: 'Development Plot',
    location: 'Austin, Texas',
    price: 750000,
    area: 5000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    id: 4,
    type: 'Commercial',
    title: 'Office Space',
    location: 'Financial District, NYC',
    price: 2500000,
    area: 3500,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

const propertyTypes = ['All', 'Apartment', 'House', 'Land', 'Commercial'];
const priceRanges = ['Any', '0-500k', '500k-1M', '1M-2M', '2M+'];

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('Any');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const price = property.price;
    const matchesPrice = selectedPrice === 'Any' ||
      (selectedPrice === '0-500k' && price <= 500000) ||
      (selectedPrice === '500k-1M' && price > 500000 && price <= 1000000) ||
      (selectedPrice === '1M-2M' && price > 1000000 && price <= 2000000) ||
      (selectedPrice === '2M+' && price > 2000000);

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Filter className="w-5 h-5 mr-2" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <Link
            to={`/property/${property.id}`}
            key={property.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {property.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 flex items-center mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {property.location}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  ${(property.price / 1000000).toFixed(2)}M
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                {property.bedrooms && (
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span>{property.area} sqft</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}