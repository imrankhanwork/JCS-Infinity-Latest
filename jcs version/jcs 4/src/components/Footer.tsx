
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer at Google",
      content: "JCS Infinity helped me land my dream job. The community and resources are incredible!",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Jane Smith",
      role: "Full Stack Developer at Microsoft",
      content: "The mentorship and hands-on projects here are unmatched. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Alex Johnson",
      role: "Data Scientist at Amazon",
      content: "From beginner to professional - JCS Infinity made it possible. Amazing community!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <footer className="border-t border-primary/20">
      {/* Testimonials Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What People <span className="text-primary">Say About Us</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-primary/50"
                />
              </div>
              
              <blockquote className="text-xl mb-4 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div>
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-accent text-sm">{testimonials[currentTestimonial].role}</p>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Compact 2-Column Layout */}
      <div className="border-t border-primary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* About Us */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">About JCS Infinity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are a passionate college coding club dedicated to fostering innovation, 
                learning, and collaboration among aspiring developers. Join us to explore 
                infinite possibilities in programming.
              </p>
            </div>

            {/* Contact Us with Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Mail className="w-4 h-4" />
                <span>info@jcsinfinity.edu</span>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/jcsinfinity" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/jcsinfinity" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/jcsinfinity" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/jcsinfinity" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary/10 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 JCS Infinity. All rights reserved. Made with 💜 by the community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
