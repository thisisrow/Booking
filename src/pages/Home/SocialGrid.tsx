import { Youtube, Instagram, CheckCircle, } from 'lucide-react';

const SocialGrid = () => {
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
            stats: "289 posts • 18.1K followers • 356 following",
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
    <>
    <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Social Media</h2>

        {/* YouTube Channels */}
        <div className="mb-12">
  <h3 className="text-2xl font-semibold mb-6 flex items-center">
    <Youtube className="w-6 h-6 text-red-600 mr-2" />
    YouTube Channels
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
    {socialAccounts.youtube.map((channel, index) => (
      <a
        key={index}
        href={channel.url}
        target="_blank"
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center p-4 text-center">
          <img
            src={channel.image}
            alt={channel.name}
            className="w-16 h-16 rounded-full object-cover mb-2"
          />
          <h4 className="font-semibold text-sm">{channel.name}</h4>
          <p className="text-gray-600 text-xs">{channel.handle}</p>
          <p className="text-gray-500 text-xs">{channel.stats}</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </>
  )
}

export default SocialGrid