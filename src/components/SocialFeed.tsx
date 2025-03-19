import React from 'react';

const instagramPosts = [
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=400&h=600&fit=crop',
];

export default function SocialFeed() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((url, index) => (
            <div
              key={index}
              className="relative group overflow-hidden aspect-square md:aspect-auto"
            >
              <img
                src={url}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Post
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Latest YouTube Video
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}