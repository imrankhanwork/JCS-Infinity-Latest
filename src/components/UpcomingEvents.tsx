import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "React Bootcamp: Modern Web Interfaces",
      date: "July 15, 2025",
      time: "2:00 PM – 5:00 PM",
      location: "Computer Lab A",
      attendees: 24,
      maxAttendees: 30,
      description: "Hands-on React workshop covering components, hooks, and project structure for beginners."
    },
    {
      id: 2,
      title: "Python x AI: Build Smart Apps",
      date: "July 22, 2025",
      time: "10:00 AM – 4:00 PM",
      location: "Conference Room B",
      attendees: 18,
      maxAttendees: 25,
      description: "Discover how to build AI-powered tools using Python, NumPy, and scikit-learn."
    },
    {
      id: 3,
      title: "Infinity Hackathon: Code for Change",
      date: "August 5–6, 2025",
      time: "48 Hours",
      location: "Innovation Hub",
      attendees: 45,
      maxAttendees: 60,
      description: "Collaborate with fellow coders to build solutions that create real-world impact in just 2 days."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What’s Happening at <span className="text-purple-400">JCS Infinity</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore upcoming workshops, hackathons, and bootcamps led by students, for students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-purple-900/30 to-black/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>

              <div className="space-y-3 mb-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                  {event.date} • {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  {event.attendees}/{event.maxAttendees} registered
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="bg-purple-600/20 px-3 py-1 rounded-full">
                  <span className="text-purple-300 text-xs font-medium">
                    {event.maxAttendees - event.attendees} spots left
                  </span>
                </div>
                <Link
                  to={`/event-register/${event.id}`}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
