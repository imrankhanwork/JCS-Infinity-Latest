
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Calendar, MapPin, Users, Clock, ArrowLeft } from 'lucide-react';

const EventRegister = () => {
  const { eventId } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth context
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    expectations: ''
  });

  // Mock event data - in real app, this would come from your backend
  const events = {
    1: {
      title: "React Workshop: Building Modern UIs",
      date: "July 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      attendees: 24,
      maxAttendees: 30,
      description: "Learn the fundamentals of React and build your first interactive web application. This hands-on workshop will cover components, state management, and modern React patterns.",
      requirements: ["Basic HTML/CSS knowledge", "JavaScript fundamentals", "Laptop with code editor"],
      instructor: "Sarah Johnson, Senior Frontend Developer"
    },
    2: {
      title: "Python Data Science Bootcamp",
      date: "July 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Room B",
      attendees: 18,
      maxAttendees: 25,
      description: "Dive into data analysis and machine learning with Python libraries like Pandas, NumPy, and Scikit-learn.",
      requirements: ["Basic Python knowledge", "Mathematics fundamentals", "Laptop with Python installed"],
      instructor: "Dr. Michael Chen, Data Scientist"
    }
  };

  const event = events[eventId as keyof typeof events];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would submit to your backend
    setIsRegistered(true);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
        <Navigation />
        <div className="pt-24 flex items-center justify-center min-h-screen px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <Link to="/" className="text-purple-400 hover:text-purple-300">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
        <Navigation />
        <div className="pt-24 flex items-center justify-center min-h-screen px-4">
          <div className="bg-black/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 max-w-md text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Registration Successful!</h1>
            <p className="text-gray-300 mb-6">
              You've successfully registered for {event.title}. Check your email for confirmation details.
            </p>
            <Link 
              to="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      <Navigation />
      
      <div className="pt-24 px-4 pb-12">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event Details */}
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h1 className="text-3xl font-bold text-white mb-6">{event.title}</h1>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-purple-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-purple-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-purple-400" />
                  <span>{event.attendees}/{event.maxAttendees} registered</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{event.description}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Instructor</h4>
                <p className="text-gray-300">{event.instructor}</p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {isLoggedIn ? 'Register for Event' : 'Login Required'}
              </h2>

              {!isLoggedIn ? (
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    You need to be logged in as a member to register for events.
                  </p>
                  <Link 
                    to="/login"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Login Now
                  </Link>
                  <p className="text-gray-400 mt-4 text-sm">
                    Don't have an account? <Link to="/login" className="text-purple-400 hover:text-purple-300">Sign up here</Link>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={registrationData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={registrationData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={registrationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={registrationData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      What do you hope to learn?
                    </label>
                    <textarea
                      name="expectations"
                      value={registrationData.expectations}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your goals and expectations..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Register for Event
                  </button>
                </form>
              )}

              {/* Demo login button for testing */}
              {!isLoggedIn && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="w-full bg-gray-600 text-white py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                  >
                    Demo Login (for testing)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
