import { Facebook, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              palgharcity48 is your ultimate guide to Palghar, Virar, and Mumbai. We offer premium accommodations, water parks, and property listings in the most beautiful locations across Maharashtra.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="/resorts" className="hover:text-blue-600">Resorts</a></li>
              <li><a href="/water-park" className="hover:text-blue-600">Water Parks</a></li>
              <li><a href="/villas" className="hover:text-blue-600">Villas</a></li>
              <li><a href="/properties" className="hover:text-blue-600">Properties</a></li>
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Palghar, Maharashtra, India
              </li>
              <li>+91 6394031815</li>
              <li>support@palgharcity48.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Palghar-City/100086386431729/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/palgharcity48/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@travelwith_sachinn332" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600" aria-label="Subscribe to our YouTube channel">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="https://maps.app.goo.gl/JTh528cHFHRVYEQ8A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Find us on Google Maps
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} palgharcity48. All rights reserved. | Your guide to Palghar, Virar & Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}