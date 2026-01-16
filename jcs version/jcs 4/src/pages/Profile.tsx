
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedStars from '@/components/AnimatedStars';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Camera, Trophy, BookOpen, Image, Users, Settings } from 'lucide-react';
import DiscoverUsers from '@/components/DiscoverUsers';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newPost, setNewPost] = useState('');

  const userProfile = {
    name: "John Doe",
    bio: "Full-stack developer passionate about creating amazing web experiences. Always learning something new!",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face",
    joinDate: "September 2023",
    location: "San Francisco, CA",
    email: "john.doe@example.com"
  };

  const achievements = [
    { name: "Course Completionist", description: "Completed 5 courses", icon: BookOpen, color: "text-blue-400" },
    { name: "Community Helper", description: "Helped 20+ students", icon: Users, color: "text-green-400" },
    { name: "Event Participant", description: "Attended 10 events", icon: Trophy, color: "text-yellow-400" },
    { name: "Project Master", description: "Completed 15 projects", icon: Settings, color: "text-purple-400" }
  ];

  const coursesTaken = [
    { name: "React Development", progress: 100, status: "Completed" },
    { name: "Python Fundamentals", progress: 85, status: "In Progress" },
    { name: "Machine Learning", progress: 60, status: "In Progress" },
    { name: "JavaScript Advanced", progress: 100, status: "Completed" }
  ];

  const userPosts = [
    {
      id: 1,
      content: "Just finished my React project! Building a task management app was challenging but rewarding. Thanks to the JCS community for the support! 🚀",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      content: "Attending the Machine Learning workshop tomorrow. Excited to dive deeper into AI concepts!",
      timestamp: "1 day ago",
      likes: 8,
      comments: 2
    }
  ];

  const connections = [
    { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face", status: "Connected" },
    { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", status: "Connected" },
    { name: "Emily Zhang", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face", status: "Pending" }
  ];

  const uploadedImages = [
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop"
  ];

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      console.log('New post:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatedStars />
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <Card className="glass neon-glow mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-primary/50">
                      <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-primary hover:bg-primary/80"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h1 className="text-3xl font-bold mb-2 md:mb-0">{userProfile.name}</h1>
                      <Button
                        onClick={() => setIsEditing(!isEditing)}
                        variant="outline"
                        className="glass border-primary/30 hover:bg-primary/10"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{userProfile.bio}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <span className="break-words">📍 {userProfile.location}</span>
                      <span className="break-words">📅 Joined {userProfile.joinDate}</span>
                      <span className="break-words">✉️ {userProfile.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="overview" className="space-y-6">
              <div className="overflow-x-auto">
                <TabsList className="glass border-primary/30 grid w-full grid-cols-3 lg:grid-cols-5 min-w-max">
                  <TabsTrigger value="overview" className="text-xs sm:text-sm whitespace-nowrap">Overview</TabsTrigger>
                  <TabsTrigger value="courses" className="text-xs sm:text-sm whitespace-nowrap">Courses</TabsTrigger>
                  <TabsTrigger value="posts" className="text-xs sm:text-sm whitespace-nowrap">Posts</TabsTrigger>
                  <TabsTrigger value="images" className="text-xs sm:text-sm whitespace-nowrap">Images</TabsTrigger>
                  <TabsTrigger value="connections" className="text-xs sm:text-sm whitespace-nowrap">Connect</TabsTrigger>
                </TabsList>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Achievements */}
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-primary" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        return (
                          <div key={index} className="text-center p-4 glass rounded-lg">
                            <IconComponent className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                            <h4 className="font-semibold">{achievement.name}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* What's on your mind */}
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>What's on your mind?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Share your thoughts, progress, or questions..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="glass border-primary/30 focus:border-primary"
                      rows={3}
                    />
                    <Button onClick={handlePostSubmit} className="neon-glow">
                      Post Update
                    </Button>
                  </CardContent>
                </Card>

                {/* Discover & Connect Section */}
                <DiscoverUsers />
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>My Learning Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {coursesTaken.map((course, index) => (
                        <div key={index} className="glass p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{course.name}</h4>
                            <Badge 
                              variant={course.status === 'Completed' ? 'default' : 'outline'}
                              className={course.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'border-primary/30'}
                            >
                              {course.status}
                            </Badge>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{course.progress}% complete</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="posts">
                <div className="space-y-6">
                  {userPosts.map((post) => (
                    <Card key={post.id} className="glass">
                      <CardContent className="p-6">
                        <p className="mb-4">{post.content}</p>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>{post.timestamp}</span>
                          <div className="flex space-x-4">
                            <span>❤️ {post.likes}</span>
                            <span>💬 {post.comments}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="images">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Image className="w-5 h-5 mr-2 text-primary" />
                      My Images
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group cursor-pointer">
                          <img
                            src={image}
                            alt={`Upload ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-lg glass hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <Button size="icon" variant="ghost">
                              <Image className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="connections">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      My Connections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {connections.map((connection, index) => (
                        <div key={index} className="flex items-center justify-between p-4 glass rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={connection.avatar} alt={connection.name} />
                              <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{connection.name}</p>
                              <p className="text-sm text-muted-foreground">JCS Member</p>
                            </div>
                          </div>
                          <Badge 
                            variant={connection.status === 'Connected' ? 'default' : 'outline'}
                            className={connection.status === 'Connected' ? 'bg-green-500/20 text-green-400' : 'border-yellow-500/30 text-yellow-400'}
                          >
                            {connection.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
