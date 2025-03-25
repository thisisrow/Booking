import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Castle,
  Info,
  Phone,
  Waves,
  Compass,
  Users,
  Home as HomeIcon,
  MoreHorizontal,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";

export default function Navbar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMore && !(event.target as Element).closest(".more-menu")) {
        setShowMore(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMore]);

  useEffect(() => {
    setShowMore(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/resorts", label: "Resorts", icon: <Building2 className="w-5 h-5" /> },
    { path: "/water-park", label: "Water Park", icon: <Waves className="w-5 h-5" /> },
    { path: "/villas", label: "Villas", icon: <Castle className="w-5 h-5" /> },
    { path: "/tourism", label: "Tourism", icon: <Compass className="w-5 h-5" /> },
    { path: "/products", label: "Products", icon: <ShoppingBag className="w-5 h-5" /> },
    { path: "/properties", label: "Properties", icon: <HomeIcon className="w-5 h-5" /> },
    { path: "/collaboration", label: "Collaborate", icon: <Users className="w-5 h-5" /> },
    { path: "/about", label: "About Us", icon: <Info className="w-5 h-5" /> },
    { path: "/contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  const mainNavItems = navItems.slice(0, 5);
  const moreNavItems = navItems.slice(5);

  const isActive = (path: string) => location.pathname === path;

  // ✅ **Mobile Navbar (Bottom Navigation) for screens < 755px**
  if (screenSize < 755) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[100]">
        <div className="grid grid-cols-6 overflow-x-auto">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                isActive(item.path) ? "text-blue-600" : "text-gray-600"
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
                showMore ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-xs mt-1">More</span>
            </button>
            {showMore && (
              <div
                className="fixed bottom-16 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-[101]"
                style={{ maxHeight: "calc(100vh - 5rem)", overflowY: "auto" }}
              >
                {moreNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 p-4 border-b border-gray-100 ${
                      isActive(item.path) ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-gray-50"
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
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/db1nsxnit/image/upload/v1742932820/468575283_1517059178997254_5439620630015446336_n_cdn44q.jpg?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-8 h-8 object-cover"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">palgharcity48</span>
            </Link>
          </div>

          {/* ✅ Convert Navbar to Sidebar Between 755px - 1197px */}
          {screenSize >= 755 && screenSize <= 1197 ? (
            <div className="relative more-menu">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-gray-600 hover:text-blue-600 px-4 py-2"
              >
                <Menu className="w-6 h-6" />
              </button>
              {showMore && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-[100]">
                  <div className="fixed left-0 top-0 bottom-0 bg-white shadow-lg w-64 z-[101]">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                      <span className="text-lg font-bold">Menu</span>
                      <button
                        onClick={() => setShowMore(false)}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="p-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                            isActive(item.path) ? "text-blue-600 font-bold" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-2 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.path) ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  } transition-colors duration-200`}
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
