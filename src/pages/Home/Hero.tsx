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
      <section className="relative h-[50vh]">
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
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-8">Welcome to PalgharCity48</h1> {/* Increased gap by changing mb-4 to mb-8 */}
          </div>
          <div className="flex flex-col-reverse md:flex-row space-x-8 items-center justify-center"> {/* Increased space-x-4 to space-x-8 */}
              <div className="flex space-x- mb-8 md:mb-0"> {/* Increased space-x-4 to space-x-8 and mb-4 to mb-8 */}
          <a
            href="https://www.instagram.com/palgharcity48/"
            target="_blank"
            className="flex items-center space-x-2 bg-gradient-to-br from-pink-600 to-purple-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@palgharcity48"
            target="_blank"
            className="flex items-center space-x-2 bg-gradient-to-br from-red-500 to-red-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/share/18iVDrZZsC/?mibextid=wwXIfr"
            target="_blank"
            className="flex items-center space-x-2 bg-gradient-to-br from-red-500 to-blue-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
              </div>
                <p className="text-white italic md:ml-8 md:mt-0 mt-4 self-center md:self-auto"> {/* Added md:mt-0 and mt-4, and adjusted alignment */}
              - by <span className="font-semibold">Sachin Vishwakarma</span>
                </p>
            </div>
        </div>

      </section>
    </>
  );
};

export default Hero;