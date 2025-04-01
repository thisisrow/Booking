import { Youtube, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <>
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80"
            alt="Hero"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <video
            id="hero-video"
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="https://res.cloudinary.com/db1nsxnit/video/upload/v1743250074/bg_dcycxi.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to PalgharCity48</h1>
            <p className="text-lg italic">
              - by <span className="font-semibold">Sachin Vishwakarma</span>
            </p>
            <p className="text-xl mb-8">
              "Experience the thrill and excitement at our world-class water parks!"
            </p>
            <div className="flex flex-wrap space-x-4 space-y-2 sm:space-y-0">
              <a
                href="https://www.instagram.com/palgharcity48/"
                target="_blank"
                className="flex items-center space-x-2 bg-gradient-to-br from-pink-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@palgharcity48"
                target="_blank"
                className="flex items-center space-x-2 bg-gradient-to-br from-red-500 to-red-700 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.facebook.com/share/18iVDrZZsC/?mibextid=wwXIfr"
                target="_blank"
                className="flex items-center space-x-2 bg-gradient-to-br from-red-500 to-blue-700 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;