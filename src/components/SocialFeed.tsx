import React from 'react';
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal, Settings, Grid, Video, PenSquare as PersonSquare } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    likes: '156K',
    comments: '2,453'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    likes: '143K',
    comments: '1,264'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6',
    likes: '189K',
    comments: '3,112'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    likes: '201K',
    comments: '4,521'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
    likes: '167K',
    comments: '2,845'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4',
    likes: '178K',
    comments: '3,256'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6',
    likes: '134K',
    comments: '1,987'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd',
    likes: '145K',
    comments: '2,154'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18',
    likes: '198K',
    comments: '3,654'
  }
];

export default function SocialFeed() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[935px] mx-auto px-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <h2 className="text-xl font-semibold">luxstays</h2>
                <button className="px-4 py-1.5 bg-gray-100 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
                  Follow
                </button>
                <button className="px-4 py-1.5 bg-gray-100 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
                  Message
                </button>
                <Settings className="w-5 h-5 text-gray-700 cursor-pointer" />
              </div>
              
              <div className="flex gap-8">
                <div className="text-sm">
                  <span className="font-semibold">763</span>
                  <span className="text-gray-500 ml-1">posts</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">3.2M</span>
                  <span className="text-gray-500 ml-1">followers</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">1.6K</span>
                  <span className="text-gray-500 ml-1">following</span>
                </div>
              </div>
              
              <div>
                <h1 className="font-semibold">LuxStays Official</h1>
                <p className="text-sm text-gray-700">Luxury Stays & Experiences</p>
                <p className="text-sm text-gray-700">Discover the world's most exclusive properties</p>
                <a href="#" className="text-sm text-blue-900 font-medium">luxstays.com</a>
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

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-7">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square group cursor-pointer">
              <img
                src={`${post.image}?w=600&h=600&fit=crop`}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-6 h-6 fill-white stroke-none" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-6 h-6 fill-white stroke-none" />
                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mt-16 border border-gray-200 rounded-lg max-w-[470px] mx-auto overflow-hidden">
          <div className="p-3 flex items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=150&h=150&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-sm">luxstays</span>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
          
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=600&fit=crop"
            alt="Featured post"
            className="w-full aspect-square object-cover"
          />
          
          <div className="p-3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors" />
                <Send className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors" />
              </div>
              <Bookmark className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors" />
            </div>
            
            <div className="mb-2">
              <span className="font-semibold text-sm">156,547 likes</span>
            </div>
            
            <div className="text-sm">
              <span className="font-semibold">luxstays</span>
              <span className="ml-2">Experience luxury like never before at our exclusive mountain retreat ⛰️✨</span>
            </div>
            
            <button className="text-gray-500 text-xs mt-1 hover:text-gray-900">
              View all 2,453 comments
            </button>
            
            <div className="text-gray-400 text-[10px] uppercase mt-1">
              2 days ago
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Latest YouTube Video
          </h2>
         <div className=' grid grid-cols-2 md:grid-cols-2 gap-2'>
         <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[200px] rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[200px] rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[200px] rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[200px] rounded-xl"
            ></iframe>
          </div>

         </div>
          </div>
    </section>
  );
}