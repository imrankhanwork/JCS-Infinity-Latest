
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, UserPlus, Eye } from 'lucide-react';

const UserSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const mockUsers = [
    {
      id: 1,
      name: "Sarah Kim",
      bio: "Frontend developer passionate about React and design",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      status: "Available",
      posts: 12,
      connections: 45
    },
    {
      id: 2,
      name: "Alex Chen",
      bio: "Machine Learning enthusiast and Python developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Busy",
      posts: 8,
      connections: 32
    },
    {
      id: 3,
      name: "Emily Zhang",
      bio: "Full-stack developer building cool web apps",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      status: "Available",
      posts: 15,
      connections: 67
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filtered = mockUsers.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.bio.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleConnect = (userId: number) => {
    console.log(`Connecting with user ${userId}`);
    // Here you would implement the actual connection logic
  };

  const handleViewProfile = (userId: number) => {
    console.log(`Viewing profile of user ${userId}`);
    // Here you would navigate to user's profile
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 glass border-primary/30 focus:border-primary"
          />
        </div>
        <Button onClick={handleSearch} className="neon-glow">
          Search
        </Button>
      </div>

      {searchResults.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">Search Results</h4>
          {searchResults.map((user) => (
            <Card key={user.id} className="glass">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="font-medium">{user.name}</h5>
                        <Badge 
                          variant="outline"
                          className={user.status === 'Available' ? 'border-green-500/30 text-green-400' : 'border-yellow-500/30 text-yellow-400'}
                        >
                          {user.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{user.bio}</p>
                      <div className="flex space-x-4 text-xs text-muted-foreground">
                        <span>{user.posts} posts</span>
                        <span>{user.connections} connections</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleViewProfile(user.id)}
                      className="glass border-primary/30 hover:bg-primary/10"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleConnect(user.id)}
                      className="neon-glow"
                    >
                      <UserPlus className="w-4 h-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {searchQuery && searchResults.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No users found matching your search.
        </div>
      )}
    </div>
  );
};

export default UserSearch;
