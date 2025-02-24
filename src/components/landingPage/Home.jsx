import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const posts = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Just had an amazing day at the beach! 🌊☀️",
    image: "https://source.unsplash.com/600x400/?beach",
    likes: 120,
    comments: 45,
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Loving this new coffee spot ☕😍 #CaffeineAddict",
    image: "https://source.unsplash.com/600x400/?coffee",
    likes: 95,
    comments: 30,
  },
];

export const Home = () => {
  const [likedPosts, setLikedPosts] = useState({});

  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header
        className="relative w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-6"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?real-estate')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl sm:text-5xl font-bold relative">
          Welcome to RateAProperty
        </h1>
        <p className="text-lg sm:text-xl mt-2 relative">
          Rate, review, and discover amazing properties!
        </p>
        <div className="mt-4 relative flex space-x-4">
          <NavLink
            to="/signup"
            className="bg-blue-600 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </NavLink>
          <NavLink
            to="/signin"
            className="bg-gray-800 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-gray-900 transition"
          >
            Sign In
          </NavLink>
        </div>
      </header>

      {/* Posts Section */}
      <div className="max-w-4xl mx-auto mt-10 space-y-8 px-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {post.user}
              </h3>
            </div>
            <p className="mt-2 text-gray-600">{post.content}</p>
            <img
              src={post.image}
              alt="Post"
              className="mt-3 w-full rounded-lg shadow-md"
            />
            <div className="flex justify-between items-center mt-4 text-gray-700">
              <button
                className="flex items-center space-x-1"
                onClick={() => handleLike(post.id)}
              >
                <Heart
                  className={`w-6 h-6 ${
                    likedPosts[post.id]
                      ? "text-red-500 fill-current"
                      : "text-gray-600"
                  }`}
                />
                <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
              </button>
              <button className="flex items-center space-x-1">
                <MessageCircle className="w-6 h-6" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-1">
                <Share2 className="w-6 h-6" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
