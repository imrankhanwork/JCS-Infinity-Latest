
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  
  const tags = ['All', 'JavaScript', 'React', 'Python', 'AI/ML', 'Web Dev', 'Mobile'];
  
  const blogPosts = [
    {
      id: 1,
      title: 'Building a Real-time Chat App with React and Socket.io',
      author: 'Alex Johnson',
      preview: 'Learn how to create a fully functional real-time chat application using React for the frontend and Socket.io for real-time communication...',
      date: '2024-01-15',
      readTime: '8 min',
      tags: ['React', 'JavaScript', 'Web Dev'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning with Python',
      author: 'Sarah Chen',
      preview: 'A beginner-friendly guide to getting started with machine learning using Python, covering essential libraries like NumPy, Pandas, and Scikit-learn...',
      date: '2024-01-12',
      readTime: '12 min',
      tags: ['Python', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Mobile App Development: React Native vs Flutter',
      author: 'Marcus Williams',
      preview: 'A comprehensive comparison of React Native and Flutter for cross-platform mobile development, discussing pros, cons, and use cases...',
      date: '2024-01-10',
      readTime: '10 min',
      tags: ['Mobile', 'React'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Modern CSS Techniques for Better Web Design',
      author: 'Emily Rodriguez',
      preview: 'Explore modern CSS features like Grid, Flexbox, and CSS Variables to create beautiful and responsive web designs...',
      date: '2024-01-08',
      readTime: '6 min',
      tags: ['Web Dev', 'CSS'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop'
    }
  ];

  const filteredPosts = selectedTag === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      <Navigation />
      
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tutorials, and stories from our coding community
            </p>
          </div>
          
          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-600/30 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.preview}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>By {post.author}</span>
                    <span>{post.readTime} read</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
