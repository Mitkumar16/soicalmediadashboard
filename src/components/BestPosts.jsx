import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost, FaTelegramPlane } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const platformIcons = {
  Facebook: <FaFacebook className="text-blue-700" />,
  Twitter: <FaTwitter className="text-blue-400" />,
  Instagram: <FaInstagram className="text-pink-500" />,
  YouTube: <FaYoutube className="text-red-500" />,
  Snapchat: <FaSnapchatGhost className="text-yellow-500" />,
  Telegram: <FaTelegramPlane className="text-blue-500" />,
};

const BestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [analytics, setAnalytics] = useState(null);

  // Fetch posts from a free API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=6");
      const data = await response.json();

      const platforms = ["Facebook", "Twitter", "Instagram", "YouTube", "Snapchat", "Telegram"];
      const enrichedData = data.map((post, index) => ({
        ...post,
        platform: platforms[index % platforms.length],
        engagement: `${(Math.random() * 5).toFixed(2)}%`,
      }));

      setPosts(enrichedData);
    };

    fetchPosts();
  }, []);

  // Fetch analytics for a specific post
  const fetchAnalytics = async (postId) => {
    // Mock analytics data
    const analyticsData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      likes: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
      comments: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
      shares: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
    };
    setAnalytics(analyticsData);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    fetchAnalytics(post.id);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold text-purple-500">The Best Posts</h2>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Image</th>
              <th className="text-left py-2 px-4">Description</th>
              <th className="text-left py-2 px-4">Platform</th>
              <th className="text-left py-2 px-4">Engagement</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t hover:bg-gray-100">
                <td className="py-2 px-4">
                  <img src={post.thumbnailUrl} alt={post.title} className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 truncate">{post.title}</td>
                <td className="py-2 px-4 flex items-center gap-2">
                  {platformIcons[post.platform]} {post.platform}
                </td>
                <td className="py-2 px-4">{post.engagement}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handlePostClick(post)}
                    className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700"
                  >
                    View Analytics
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Modal */}
      {selectedPost && analytics && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 lg:w-1/2">
            <h3 className="text-lg font-bold text-indigo-600">
              Analytics for {selectedPost.title} ({selectedPost.platform})
            </h3>
            <div className="my-4">
              <Line
                data={{
                  labels: analytics.labels,
                  datasets: [
                    {
                      label: "Likes",
                      data: analytics.likes,
                      borderColor: "rgba(75, 192, 192, 1)",
                      backgroundColor: "rgba(75, 192, 192, 0.2)",
                    },
                    {
                      label: "Comments",
                      data: analytics.comments,
                      borderColor: "rgba(255, 99, 132, 1)",
                      backgroundColor: "rgba(255, 99, 132, 0.2)",
                    },
                    {
                      label: "Shares",
                      data: analytics.shares,
                      borderColor: "rgba(54, 162, 235, 1)",
                      backgroundColor: "rgba(54, 162, 235, 0.2)",
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Engagement Trends",
                    },
                  },
                }}
              />
            </div>
            <button
              onClick={() => setSelectedPost(null)}
              className="mt-4 text-sm text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestPosts;
