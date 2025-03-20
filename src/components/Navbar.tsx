import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, Castle, Info, Phone, Menu, Waves, Compass, Users, Home as HomeIcon, MoreHorizontal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMore && !(event.target as Element).closest('.more-menu')) {
        setShowMore(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showMore]);

  // Close more menu when route changes
  useEffect(() => {
    setShowMore(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/resorts', label: 'Resorts', icon: <Building2 className="w-5 h-5" /> },
    { path: '/villas', label: 'Villas', icon: <Castle className="w-5 h-5" /> },
    { path: '/water-park', label: 'Water Park', icon: <Waves className="w-5 h-5" /> },
    { path: '/tourism', label: 'Tourism', icon: <Compass className="w-5 h-5" /> },
    { path: '/properties', label: 'Properties', icon: <HomeIcon className="w-5 h-5" /> },
    { path: '/collaboration', label: 'Collaborate', icon: <Users className="w-5 h-5" /> },
    { path: '/about', label: 'About Us', icon: <Info className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
  ];

  const mainNavItems = navItems.slice(0, 4);
  const moreNavItems = navItems.slice(4);

  const isActive = (path: string) => location.pathname === path;

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[100]">
        <div className="grid grid-cols-5 overflow-x-auto">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                isActive(item.path) ? 'text-blue-600' : 'text-gray-600'
              } transition-colors duration-200`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
          <div className="relative more-menu">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowMore(!showMore);
              }}
              className={`flex flex-col items-center p-2 w-full ${
                showMore ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-xs mt-1">More</span>
            </button>
            {showMore && (
              <div 
                className="fixed bottom-16 left-0 right-0 bg-white shadow-lg overflow-hidden border-t border-gray-100 z-[101]"
                style={{ maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }}
              >
                {moreNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 p-4 border-b border-gray-100 ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Castle className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">LuxStays</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                } transition-colors duration-200`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}