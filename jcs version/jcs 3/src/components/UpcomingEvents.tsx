
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "React Workshop: Building Modern UIs",
      date: "July 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      attendees: 24,
      maxAttendees: 30,
      description: "Learn the fundamentals of React and build your first interactive web application"
    },
    {
      id: 2,
      title: "Python Data Science Bootcamp",
      date: "July 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Room B",
      attendees: 18,
      maxAttendees: 25,
      description: "Dive into data analysis and machine learning with Python libraries"
    },
    {
      id: 3,
      title: "Hackathon: Code for Change",
      date: "August 5-6, 2025",
      time: "48 Hours",
      location: "Innovation Hub",
      attendees: 45,
      maxAttendees: 60,
      description: "24-hour hackathon focused on creating solutions for social impact"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our exciting events and take your coding skills to the next level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-gradient-to-br from-purple-900/30 to-black/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-sm">{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-sm">{event.attendees}/{event.maxAttendees} registered</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">{event.description}</p>
              
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
