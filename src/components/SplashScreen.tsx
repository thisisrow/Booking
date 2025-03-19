import React, { useEffect, useState } from 'react';
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
        <Castle className="w-16 h-16 text-blue-600 animate-bounce mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          LuxStays
        </h1>
      </div>
    </div>
  );
}