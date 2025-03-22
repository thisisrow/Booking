import { useState } from 'react';
import { Search, Star, ShoppingCart } from 'lucide-react';
import { useProducts } from '../context/ProductsContext'; // Import useProducts

const categories = ['All', 'Bath', 'Bedding', 'Home'];
const priceRanges = ['All', 'Under $50', '$50-$100', 'Over $100'];

export default function Products() {
  const products = useProducts(); // Use the context
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  const filterProducts = () => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const price = product.price;
      const matchesPrice = 
        selectedPrice === 'All' ||
        (selectedPrice === 'Under $50' && price < 50) ||
        (selectedPrice === '$50-$100' && price >= 50 && price <= 100) ||
        (selectedPrice === 'Over $100' && price > 100);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative aspect-square">
              <img loading="lazy"
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm md:text-base mb-1 line-clamp-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-blue-600">${product.price}</span>
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}