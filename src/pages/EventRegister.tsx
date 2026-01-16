import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Calendar, MapPin, Users, Clock, ArrowLeft } from "lucide-react";

const EventRegister = () => {
  const { eventId } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    expectations: "",
  });

  const events = {
    1: {
      title: "React Workshop: Building Modern UIs",
      date: "July 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      attendees: 24,
      maxAttendees: 30,
      description:
        "Learn the fundamentals of React and build your first interactive web application.",
      requirements: [
        "Basic HTML/CSS knowledge",
        "JavaScript fundamentals",
        "Laptop with code editor",
      ],
      instructor: "Sarah Johnson",
    },
    2: {
      title: "Python Data Science Bootcamp",
      date: "July 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Room B",
      attendees: 18,
      maxAttendees: 25,
      description:
        "Dive into data analysis and machine learning with Python libraries like Pandas and Scikit-learn.",
      requirements: [
        "Basic Python knowledge",
        "Math fundamentals",
        "Laptop with Python",
      ],
      instructor: "Dr. Michael Chen",
    },
  };

  const event = events[eventId as unknown as keyof typeof events];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true); // Replace with actual API call
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
        <Navigation />
        <div className="pt-24 flex justify-center items-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <Link to="/" className="text-purple-400 hover:underline">
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
        <div className="pt-24 flex items-center justify-center px-4">
          <div className="bg-black/20 backdrop-blur border border-green-500/30 p-8 rounded-xl text-white text-center max-w-md w-full">
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-2xl mb-4">
              ✓
            </div>
            <h2 className="text-3xl font-bold mb-2">You're Registered!</h2>
            <p className="text-gray-300 mb-6">
              You're all set for <strong>{event.title}</strong>.
              See you on <strong>{event.date}</strong>!
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition"
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
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="flex items-center text-purple-400 hover:text-purple-300 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Event Details */}
            <div className="bg-black/20 p-6 rounded-xl border border-white/10 text-white backdrop-blur">
              <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
              <ul className="space-y-3 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                  {event.date}
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-purple-400 mr-3" />
                  {event.time}
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  {event.location}
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-purple-400 mr-3" />
                  {event.attendees}/{event.maxAttendees} registered
                </li>
              </ul>
              <p className="text-sm text-gray-300 mb-4">{event.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {event.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-purple-300">
                Instructor: <span className="text-white">{event.instructor}</span>
              </p>
            </div>

            {/* Form */}
            <div className="bg-black/20 p-6 rounded-xl border border-white/10 backdrop-blur text-white">
              <h2 className="text-xl font-bold mb-6">
                {isLoggedIn ? "Register Now" : "Login to Register"}
              </h2>

              {!isLoggedIn ? (
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    Please login to register for events.
                  </p>
                  <Link
                    to="/login"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg text-white font-medium hover:from-purple-700 hover:to-blue-700"
                  >
                    Login
                  </Link>
                  <p className="text-sm text-gray-400 mt-4">
                    Don’t have an account?{" "}
                    <Link to="/login" className="text-purple-400 hover:underline">
                      Sign up here
                    </Link>
                  </p>

                  {/* Demo login for testing */}
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="mt-6 w-full bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm"
                  >
                    Demo Login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={registrationData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-purple-500"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={registrationData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-purple-500"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={registrationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-purple-500"
                  />
                  <select
                    name="experience"
                    value={registrationData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                  >
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <textarea
                    name="expectations"
                    rows={4}
                    placeholder="What do you hope to learn?"
                    value={registrationData.expectations}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-purple-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition"
                  >
                    Register
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
