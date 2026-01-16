import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedStars from '@/components/AnimatedStars';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Calendar, User } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newComment, setNewComment] = useState('');

  const categories = ['All', 'Web Development', 'Data Science', 'Mobile', 'AI/ML', 'Career'];

  const blogPosts = [
    {
      id: 1,
      title: "Building Your First React Application",
      excerpt: "Learn the fundamentals of React by building a real-world application from scratch.",
      content: "React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll walk through creating your first React application, covering components, state management, and best practices. Whether you're new to React or looking to strengthen your foundation, this tutorial will provide you with the essential knowledge to start building modern web applications.",
      author: "Sarah Kim",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      date: "January 10, 2025",
      category: "Web Development",
      likes: 42,
      comments: 8,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Machine Learning for Beginners",
      excerpt: "Demystifying machine learning concepts and getting started with your first ML project.",
      content: "Machine learning might seem intimidating at first, but it's more accessible than you think. This article breaks down complex ML concepts into digestible pieces and guides you through creating your first machine learning model. We'll cover supervised learning, data preprocessing, and model evaluation using Python and popular libraries like scikit-learn.",
      author: "Alex Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "January 8, 2025",
      category: "AI/ML",
      likes: 67,
      comments: 15,
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Landing Your First Tech Job",
      excerpt: "Essential tips and strategies for breaking into the tech industry as a new graduate.",
      content: "Breaking into the tech industry can be challenging, but with the right approach and preparation, you can land your dream job. This guide covers everything from building a strong portfolio to acing technical interviews. We'll share insights from successful developers and recruiters to help you stand out in a competitive market.",
      author: "Michael Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      date: "January 5, 2025",
      category: "Career",
      likes: 89,
      comments: 23,
      readTime: "12 min read"
    }
  ];

  const comments = [
    {
      id: 1,
      postId: 1,
      author: "John Doe",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=32&h=32&fit=crop&crop=face",
      content: "Great article! This really helped me understand React better.",
      date: "2 hours ago"
    },
    {
      id: 2,
      postId: 1,
      author: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      content: "Could you cover state management in more detail?",
      date: "1 day ago"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleCommentSubmit = (postId: number) => {
    if (newComment.trim()) {
      console.log(`Adding comment to post ${postId}:`, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatedStars />
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                JCS <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and stories from our community
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category 
                      ? "neon-glow" 
                      : "glass border-primary/30 hover:bg-primary/10"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="glass hover:neon-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl lg:text-3xl mb-2">{post.title}</CardTitle>
                    <p className="text-muted-foreground text-lg">{post.excerpt}</p>
                    
                    <div className="flex items-center space-x-3 pt-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.authorAvatar} alt={post.author} />
                        <AvatarFallback>
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-muted-foreground">JCS Team Member</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                    
                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                    </div>

                    {/* Comments Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Comments</h4>
                      
                      {/* Existing Comments */}
                      <div className="space-y-3">
                        {comments
                          .filter(comment => comment.postId === post.id)
                          .map((comment) => (
                            <div key={comment.id} className="flex space-x-3 p-3 glass rounded-lg">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={comment.avatar} alt={comment.author} />
                                <AvatarFallback>
                                  <User className="w-4 h-4" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <p className="font-medium text-sm">{comment.author}</p>
                                  <p className="text-xs text-muted-foreground">{comment.date}</p>
                                </div>
                                <p className="text-sm mt-1">{comment.content}</p>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Add Comment */}
                      <div className="space-y-3">
                        <Textarea
                          placeholder="Share your thoughts..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="glass border-primary/30 focus:border-primary resize-none"
                          rows={3}
                        />
                        <Button 
                          onClick={() => handleCommentSubmit(post.id)}
                          size="sm"
                          className="neon-glow"
                        >
                          Post Comment
                        </Button>
                      </div>
                    </div>

                    {/* Related Posts */}
                    <div className="pt-6 border-t border-primary/20">
                      <h4 className="font-semibold mb-3">Related Posts</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {blogPosts
                          .filter(p => p.id !== post.id && p.category === post.category)
                          .slice(0, 2)
                          .map((relatedPost) => (
                            <Card key={relatedPost.id} className="glass hover:bg-primary/5 transition-colors cursor-pointer">
                              <CardContent className="p-4">
                                <h5 className="font-medium mb-2">{relatedPost.title}</h5>
                                <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
