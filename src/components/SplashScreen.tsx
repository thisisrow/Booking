import { useEffect, useState } from 'react';
import { Castle } from 'lucide-react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500">
      <div className="text-center">
      <div className="flex flex-col items-center">
        <img
        loading="lazy"
        src="https://res.cloudinary.com/db1nsxnit/image/upload/v1742932820/468575283_1517059178997254_5439620630015446336_n_cdn44q.jpg?w=150&h=150&fit=crop"
        alt="Profile"
        className="w-16 h-16 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        palgharcity48
        </h1>
      </div>
      </div>
    </div>
  );
}