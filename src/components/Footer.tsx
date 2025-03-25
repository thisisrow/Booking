import { Facebook, Twitter, Instagram, Youtube} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              palgharcity48 offers premium accommodations for the discerning traveler, ensuring unforgettable experiences in the world's most beautiful locations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="/resorts" className="hover:text-blue-600">Resorts</a></li>
              <li><a href="/villas" className="hover:text-blue-600">Villas</a></li>
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>Paradise City, PC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>support@palgharcity48.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" target='	_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#"  target='	_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/palgharcity48/" target='	_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@travelwith_sachinn332" target='	_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} palgharcity48. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}