
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, X, Camera } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface EditProfileProps {
  userProfile: {
    name: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
  };
  onSave: (updatedProfile: any) => void;
  onCancel: () => void;
}

const EditProfile = ({ userProfile, onSave, onCancel }: EditProfileProps) => {
  const [formData, setFormData] = useState({
    name: userProfile.name,
    bio: userProfile.bio,
    location: userProfile.location,
    email: userProfile.email,
    avatar: userProfile.avatar
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleAvatarChange = () => {
    // In a real implementation, this would open a file picker
    console.log('Avatar change requested');
  };

  return (
    <Card className="glass neon-glow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Edit Profile</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onCancel}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-primary/50">
                <AvatarImage src={formData.avatar} alt={formData.name} />
                <AvatarFallback className="text-lg">
                  {formData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button
                type="button"
                size="icon"
                onClick={handleAvatarChange}
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-primary hover:bg-primary/80"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Click the camera icon to change your avatar</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass border-primary/30 focus:border-primary"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass border-primary/30 focus:border-primary"
                required
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="glass border-primary/30 focus:border-primary"
                placeholder="e.g., San Francisco, CA"
              />
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="glass border-primary/30 focus:border-primary"
                rows={4}
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button type="submit" className="flex-1 neon-glow">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 glass border-primary/30 hover:bg-primary/10"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditProfile;
