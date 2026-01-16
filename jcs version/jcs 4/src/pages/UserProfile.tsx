
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import AnimatedStars from '@/components/AnimatedStars';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Trophy, MessageCircle, UserPlus } from 'lucide-react';

const UserProfile = () => {
  const { userId } = useParams();
  const [isConnected, setIsConnected] = useState(false);

  // Mock user data - in a real app, this would come from an API
  const userProfile = {
    id: userId,
    name: "Sarah Kim",
    bio: "AI/ML enthusiast and competitive programmer. Love solving complex problems and helping others learn.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    joinDate: "August 2023",
    location: "Seattle, WA",
    isTeamMember: true,
    role: "Technical Lead"
  };

  const achievements = [
    { name: "Course Master", description: "Completed 8 courses", icon: BookOpen, color: "text-blue-400" },
    { name: "Community Leader", description: "Helped 50+ students", icon: Users, color: "text-green-400" },
    { name: "Competition Winner", description: "Won 3 hackathons", icon: Trophy, color: "text-yellow-400" }
  ];

  const recentPosts = [
    {
      id: 1,
      content: "Just finished implementing a machine learning model for image classification. The results are amazing! 🤖",
      timestamp: "3 hours ago",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      content: "Excited to mentor new students in our upcoming Python bootcamp. Teaching is one of my favorite parts of being in JCS!",
      timestamp: "1 day ago",
      likes: 18,
      comments: 7
    }
  ];

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="min-h-screen">
      <AnimatedStars />
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <Card className="glass neon-glow mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <Avatar className="w-32 h-32 border-4 border-primary/50">
                    <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                    <AvatarFallback className="text-2xl">SK</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                        {userProfile.isTeamMember && (
                          <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                            {userProfile.role}
                          </Badge>
                        )}
                      </div>
                      <Button
                        onClick={handleConnect}
                        className={`neon-glow ${isConnected ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}`}
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        {isConnected ? 'Connected' : 'Connect'}
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{userProfile.bio}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                      <span>📍 {userProfile.location}</span>
                      <span>📅 Joined {userProfile.joinDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="posts" className="space-y-6">
              <TabsList className="glass border-primary/30">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="glass">
                    <CardContent className="p-6">
                      <p className="mb-4">{post.content}</p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{post.timestamp}</span>
                        <div className="flex space-x-4">
                          <span className="flex items-center">
                            <span className="mr-1">❤️</span>
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="achievements">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-primary" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
