import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaTelegramPlane,
} from "react-icons/fa";

const statsData = [
  {
    platform: "Facebook",
    followers: "23.2M",
    likes: "1.6M",
    shares: "223.6k",
    comments: "75.1k",
    icon: <FaFacebook className="text-blue-700 text-3xl" />,
  },
  {
    platform: "Twitter",
    followers: "38.5M",
    likes: "97.9k",
    shares: "61.2k",
    comments: "21.6k",
    icon: <FaTwitter className="text-blue-400 text-3xl" />,
  },
  {
    platform: "Instagram",
    followers: "59.5M",
    likes: "28.7M",
    shares: "2.9k",
    comments: "138.3k",
    icon: <FaInstagram className="text-pink-500 text-3xl" />,
  },
  {
    platform: "YouTube",
    followers: "15.2M",
    likes: "1.2M",
    shares: "5.8k",
    comments: "890k",
    icon: <FaYoutube className="text-red-500 text-3xl" />,
  },
  {
    platform: "Snapchat",
    followers: "12.8M",
    likes: "800k",
    shares: "2.3k",
    comments: "150k",
    icon: <FaSnapchatGhost className="text-yellow-500 text-3xl" />,
  },
  {
    platform: "Telegram",
    followers: "8.3M",
    likes: "600k",
    shares: "1.8k",
    comments: "90k",
    icon: <FaTelegramPlane className="text-blue-500 text-3xl" />,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-lg shadow flex items-center gap-4"
        >
          <div>{stat.icon}</div>
          <div>
            <h3 className="text-xl font-semibold">{stat.platform}</h3>
            <p className="text-gray-600">Followers: {stat.followers}</p>
            <p className="text-gray-600">Likes: {stat.likes}</p>
            <p className="text-gray-600">Shares: {stat.shares}</p>
            <p className="text-gray-600">Comments: {stat.comments}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
