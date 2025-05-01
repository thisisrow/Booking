import { Settings, Play,Grid, Video, PenSquare as PersonSquare } from 'lucide-react';
import { useState } from 'react';

const posts = [
  { id: 1, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 2, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 3, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 4, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 5, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 6, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 7, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 8, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
  { id: 9, videoUrl: 'https://res.cloudinary.com/db1nsxnit/video/upload/v1743609565/Video-969_gkx7z0.mp4' },
];

export default function SocialFeed() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[935px] mx-auto px-4">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src="https://res.cloudinary.com/db1nsxnit/image/upload/v1742932820/468575283_1517059178997254_5439620630015446336_n_cdn44q.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <h2 className="text-xl font-semibold">palgharcity48</h2>
                <a href="https://www.instagram.com/palgharcity48/">
                  <button className="px-4 py-1.5 bg-gray-100 rounded-lg font-medium text-sm hover:bg-gray-200 transition">
                    Follow
                  </button>
                </a>
                <a href="https://www.instagram.com/palgharcity48/">
                  <button className="px-4 py-1.5 bg-gray-100 rounded-lg font-medium text-sm hover:bg-gray-200 transition">
                    Message
                  </button>
                </a>
                <Settings className="w-5 h-5 text-gray-700 cursor-pointer" />
              </div>

              <div className="flex gap-8">
                <div className="text-sm">
                  <span className="font-semibold">289</span>
                  <span className="text-gray-500 ml-1">posts</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">18.1K</span>
                  <span className="text-gray-500 ml-1">followers</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">289</span>
                  <span className="text-gray-500 ml-1">following</span>
                </div>
              </div>

              <div>
                <h1 className="font-semibold">palgharcity48 Official</h1>
                <p className="text-sm text-gray-700">
                  Sachin Vishwkarma | 🇮🇳 Food | Travel | Explore
                </p>
                <p className="text-sm text-gray-700">
                  📍 Palghar | Mumbai | Prayagraj | 𝗗𝗿𝗼𝗻𝗲 𝗣𝗶𝗹𝗼𝘁 🇮🇳 <br />
                  Admin of @palgharcity48 <br />
                  Explore | Traveling | Foody🔸Blogger
                </p>
                <a
                  href="https://www.instagram.com/palgharcity48/"
                  className="text-sm text-blue-900 font-medium"
                >
                  palgharcity48.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="border-t border-gray-200 mb-6">
          <div className="flex justify-center gap-12">
            <button className="flex items-center gap-2 py-4 font-semibold border-t border-black -mt-[1px]">
              <Grid className="w-4 h-4" />
              <span className="text-xs tracking-wider">POSTS</span>
            </button>
            <button className="flex items-center gap-2 py-4 text-gray-500">
              <Video className="w-4 h-4" />
              <span className="text-xs tracking-wider">REELS</span>
            </button>
            <button className="flex items-center gap-2 py-4 text-gray-500">
              <PersonSquare className="w-4 h-4" />
              <span className="text-xs tracking-wider">TAGGED</span>
            </button>
          </div>
        </div>

        {/* Instagram Video Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
  {posts.map((post) => (
    <div
      key={post.id}
      className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md cursor-pointer"
      onClick={() => setActiveVideo(post.videoUrl)}
    >
      {/* Blurred Background Video */}
      <video
        src={post.videoUrl}
        className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
        muted
        playsInline
        autoPlay
        loop
        aria-hidden="true"
      />

      {/* Foreground Video */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <video
          src={post.videoUrl}
          className="w-full h-full object-contain"
          muted
          playsInline
        />
      </div>

      {/* Play Icon Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="bg-black/50 p-3 rounded-full">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Optional dim background */}
      <div className="absolute inset-0 bg-black/10 z-0" />
    </div>
  ))}
</div>
        {/* Fullscreen Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold"
            >
              ×
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
            />
          </div>
        )}

        {/* YouTube Section */}
        <div className="mt-16 overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Latest YouTube Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/mJgR37clo-Y?si=76xydllV5fpX--gz"
                  title={`YouTube video ${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
