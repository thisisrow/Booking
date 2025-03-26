import { Award, Users, Globe, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const team = [
  {
    name: "Sachin Vishwakarma",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/db1nsxnit/image/upload/v1742932820/468575283_1517059178997254_5439620630015446336_n_cdn44q.jpg",
    social: {
      instagram: "https://www.instagram.com/palgharcity48/",
      twitter: "https://twitter.com/palgharcity48",
      linkedin: "https://linkedin.com/in/palgharcity48"
    }
  },
  {
    name: "John Doe",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About palgharcity48</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover luxury accommodations handpicked for the discerning traveler. We provide exceptional
          stays with unparalleled service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, palgharcity48 has grown from a small startup to a leading luxury
            accommodation provider. Our mission is to offer unforgettable experiences in the world's
            most beautiful locations.
          </p>
          <p className="text-gray-600">
            We carefully select each property in our portfolio to ensure it meets our high standards
            of luxury, comfort, and service excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Award className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">Handpicked luxury properties</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Professional travel advisors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Properties worldwide</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">Safe and reliable process</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our service, from property selection to
              customer support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-600">
              We maintain the highest standards of integrity in all our dealings with customers and
              partners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously innovate to improve our services and enhance the customer experience.
            </p>
          </div>
        </div>
      </div>

       {/* Team Section */}
       <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.instagram} className="text-gray-600 hover:text-pink-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} className="text-gray-600 hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terms and Conditions */}
      <section id="terms" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Terms and Conditions</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using palgharcity48's services, you agree to be bound by these terms and conditions.</p>

            <h3>2. Booking and Cancellation</h3>
            <ul>
              <li>All bookings are subject to availability</li>
              <li>Cancellations must be made at least 48 hours before check-in</li>
              <li>Refunds are subject to our cancellation policy</li>
            </ul>

            <h3>3. Payment Terms</h3>
            <p>Full payment is required at the time of booking. We accept payments through secure payment gateways.</p>

            <h3>4. Privacy Policy</h3>
            <p>We respect your privacy and protect your personal information. Read our full privacy policy below.</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Privacy Policy</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h3>1. Information Collection</h3>
            <p>We collect information that you provide directly to us when making a booking or creating an account.</p>

            <h3>2. Use of Information</h3>
            <p>We use the collected information to process your bookings and provide you with the best possible service.</p>

            <h3>3. Information Sharing</h3>
            <p>We do not sell or share your personal information with third parties except as necessary to provide our services.</p>

            <h3>4. Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information.</p>
          </div>
        </div>
      </section>
    </div>
  );
}