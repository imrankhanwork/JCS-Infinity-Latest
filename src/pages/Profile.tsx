import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@college.edu',
    studentId: 'CS2024001',
    skills: ['JavaScript', 'React', 'Python', 'Node.js'],
    eventsAttended: 12,
    blogsWritten: 5,
    bio: 'Passionate full-stack developer interested in AI and machine learning.',
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved:', profile);
    // Here you could call your backend API to update the profile
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      <Navigation />
      
      <div className="pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar */}
              <div className="flex flex-col items-center md:items-start">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-purple-500"
                />
                {isEditing && (
                  <button className="mt-2 text-purple-400 text-sm hover:text-purple-300">
                    Change Photo
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                      {isEditing ? (
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                        />
                      ) : (
                        profile.name
                      )}
                    </h1>
                    <p className="text-gray-300 mb-1">
                      {isEditing ? (
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                        />
                      ) : (
                        profile.email
                      )}
                    </p>
                    <p className="text-purple-400">Student ID: {profile.studentId}</p>
                  </div>

                  <div className="flex gap-2">
                    {isEditing ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-2">Bio</h3>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white h-20 resize-none"
                    />
                  ) : (
                    <p className="text-gray-300">{profile.bio}</p>
                  )}
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                    <div className="text-2xl font-bold text-white">{profile.eventsAttended}</div>
                    <div className="text-gray-300 text-sm">Events Attended</div>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                    <div className="text-2xl font-bold text-white">{profile.blogsWritten}</div>
                    <div className="text-gray-300 text-sm">Blogs Written</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Profile;
