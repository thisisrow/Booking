import React from 'react';
import { Instagram, Youtube, Star, TrendingUp, Users, Award } from 'lucide-react';

export default function Collaboration() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
          <h1 className="relative text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Become Our Partner
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
          Join our exclusive network of social media influencers and help us showcase the world's most luxurious stays
        </p>
      </div>

      {/* Platform Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Instagram Collaboration</h2>
            <p className="text-gray-600 mb-6">Share your luxurious experiences with your followers through stunning photos and engaging stories</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Minimum 10K followers
              </li>
              <li className="flex items-center text-gray-600">
                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                3%+ engagement rate
              </li>
              <li className="flex items-center text-gray-600">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                Travel/Lifestyle niche
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">YouTube Collaboration</h2>
            <p className="text-gray-600 mb-6">Create immersive video content showcasing our premium accommodations and experiences</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Minimum 50K subscribers
              </li>
              <li className="flex items-center text-gray-600">
                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                5K+ average views
              </li>
              <li className="flex items-center text-gray-600">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                Travel/Vlog content
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Partnership Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complimentary Stays</h3>
            <p className="text-gray-600">Experience luxury accommodations at no cost</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Commission</h3>
            <p className="text-gray-600">Earn for every booking through your content</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
            <p className="text-gray-600">Special events and networking opportunities</p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Apply Now</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instagram Handle</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="@username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Channel</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Channel URL"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your content</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your content style, niche, and audience demographics"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 transform hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}