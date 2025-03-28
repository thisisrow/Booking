import { Send, Youtube, Instagram, CheckCircle,Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import SocialFeed from '../components/SocialFeed';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  const socialAccounts = {
    youtube: [
      {
        name: "Travelwith Sachinn 332",
        handle: "@travelwith_sachinn332",
        stats: "298 subscribers • 77 videos",
        url: "https://www.youtube.com/@travelwith_sachinn332",
        image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742933073/travelwith_sachinn_xoxfjb.jpg"
      },
      {
        name: "palgharcity48 vlogs",
        handle: "@palgharcity48",
        stats: "117 subscribers • 48 videos",
        url: "https://www.youtube.com/@palgharcity48",
        image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742932820/468575283_1517059178997254_5439620630015446336_n_cdn44q.jpg"
      }
    ],
    instagram: [
      {
        name: "palgharcity48",
        handle: "@palgharcity48",
        stats: "261 posts • 3.2K followers • 320 following",
        url: "https://www.instagram.com/palgharcity48/",
        image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742932820/468575283_1517059178997254_5439620630015446336_n_cdn44q.jpg",
        verified: true
      },
      {
        name: "propertiesbysachin",
        handle: "@propertiesbysachin",
        stats: "8 posts • 266 followers • 10 following",
        url: "https://www.instagram.com/propertiesbysachin/",
        image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742933072/propertiesbysachin_esnpgy.jpg"
      },
      {
        name: "srvsachinn",
        handle: "@srvsachinn",
        stats: "60 posts • 700 followers • 413 following",
        url: "https://www.instagram.com/srvsachinn/",
        image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742933072/srvsachinn_dqddin.jpg"
      },
      {
        name: "travelwith_sachinn",
        handle: "@travelwith_sachinn",
        stats: "114 posts • 888 followers • 255 following",
        url: "https://www.instagram.com/travelwith_sachinn/",
        image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742933073/travelwith_sachinn_xoxfjb.jpg"
      }
    ]
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          {/* Fallback Image */}
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80"
            alt="Hero"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Background Video */}
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
            <source src="https://res.cloudinary.com/db1nsxnit/video/upload/v1737296756/samples/sea-turtle.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to PalgharCity48</h1>
            <p className="text-lg italic">- by <span className="font-semibold">Sachin Vishwakarma</span></p>
            <p className="text-xl mb-8">"Experience the thrill and excitement at our world-class water parks!"</p>
            <div className="flex space-x-4">
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

      {/* Social Media Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Social Media</h2>
        
        {/* YouTube Channels */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Youtube className="w-6 h-6 text-red-600 mr-2" />
            YouTube Channels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {socialAccounts.youtube.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="flex items-center p-6">
                  <img
                    src={channel.image}
                    alt={channel.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{channel.name}</h4>
                    <p className="text-gray-600 text-sm">{channel.handle}</p>
                    <p className="text-gray-500 text-sm">{channel.stats}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Instagram Accounts */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Instagram className="w-6 h-6 text-pink-600 mr-2" />
            Instagram Accounts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialAccounts.instagram.map((account, index) => (
              <a
                key={index}
                href={account.url}
                target="_blank"
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={account.image}
                      alt={account.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {account.verified && (
                      <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
                    )}
                  </div>
                  <h4 className="font-semibold flex items-center">
                    {account.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{account.handle}</p>
                  <p className="text-gray-500 text-sm mt-2">{account.stats}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <SocialFeed />

      {/* Feedback Form */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Share Your Experience</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Submit Feedback
              </button>
              <button
                type="button"
                onClick={() => window.open('https://wa.me/6394031815', '_blank')}
                className="flex items-center text-green-600 hover:text-green-700"
              >
                <Send className="w-5 h-5 mr-2" />
                Continue on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}