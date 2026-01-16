
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiscoverUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allUsers = [
    {
      id: 'sarah-kim',
      name: 'Sarah Kim',
      bio: 'AI/ML enthusiast and competitive programmer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      role: 'Technical Lead',
      isTeamMember: true,
      mutualConnections: 12
    },
    {
      id: 'alex-chen',
      name: 'Alex Chen',
      bio: 'Full-stack developer passionate about web technologies',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      role: 'Club President',
      isTeamMember: true,
      mutualConnections: 18
    },
    {
      id: 'emily-zhang',
      name: 'Emily Zhang',
      bio: 'DevOps engineer and cloud computing specialist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      role: 'Community Manager',
      isTeamMember: true,
      mutualConnections: 8
    },
    {
      id: 'michael-rodriguez',
      name: 'Michael Rodriguez',
      bio: 'Mobile app developer and UI/UX designer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      role: 'Events Coordinator',
      isTeamMember: true,
      mutualConnections: 15
    },
    {
      id: 'david-wilson',
      name: 'David Wilson',
      bio: 'Backend developer specializing in Node.js and Python',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
      role: 'Student',
      isTeamMember: false,
      mutualConnections: 5
    },
    {
      id: 'jessica-brown',
      name: 'Jessica Brown',
      bio: 'Frontend developer with a passion for React and design',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
      role: 'Student',
      isTeamMember: false,
      mutualConnections: 3
    }
  ];

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="w-5 h-5 mr-2 text-primary" />
          Discover & Connect
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search for users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 glass border-primary/30 focus:border-primary"
          />
        </div>

        {/* Users Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredUsers.map((user) => (
            <Link key={user.id} to={`/profile/${user.id}`}>
              <div className="glass p-4 rounded-lg hover:neon-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/30">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{user.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={user.isTeamMember ? 'default' : 'outline'}
                        className={user.isTeamMember ? 'bg-primary/20 text-primary border-primary/30' : 'text-xs'}
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{user.bio}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    {user.mutualConnections} mutual connections
                  </span>
                  <Button size="sm" variant="outline" className="text-xs">
                    View Profile
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No users found matching your search.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DiscoverUsers;
