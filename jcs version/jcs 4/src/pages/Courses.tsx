
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedStars from '@/components/AnimatedStars';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Code, Database, Globe, Smartphone, Cpu, FileCode, Server, Brain, BookOpen, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      name: 'Python',
      description: 'Learn Python programming from basics to advanced concepts including data structures, algorithms, and web development.',
      icon: Code,
      color: 'text-yellow-400',
      students: 150,
      level: 'Beginner',
      duration: '8 weeks',
      tags: ['Programming', 'Backend', 'Data Science']
    },
    {
      id: 2,
      name: 'Java',
      description: 'Master object-oriented programming with Java, including Spring framework and enterprise applications.',
      icon: Cpu,
      color: 'text-red-400',
      students: 120,
      level: 'Intermediate',
      duration: '10 weeks',
      tags: ['Programming', 'Backend', 'Enterprise']
    },
    {
      id: 3,
      name: 'C/C++',
      description: 'System programming and competitive programming with C/C++. Perfect for interviews and algorithms.',
      icon: FileCode,
      color: 'text-blue-400',
      students: 90,
      level: 'Advanced',
      duration: '12 weeks',
      tags: ['Programming', 'System', 'Algorithms']
    },
    {
      id: 4,
      name: 'JavaScript',
      description: 'Modern JavaScript, ES6+, DOM manipulation, and asynchronous programming concepts.',
      icon: Globe,
      color: 'text-yellow-500',
      students: 200,
      level: 'Beginner',
      duration: '6 weeks',
      tags: ['Programming', 'Frontend', 'Web']
    },
    {
      id: 5,
      name: 'HTML/CSS',
      description: 'Web design fundamentals, responsive layouts, CSS Grid, Flexbox, and modern design principles.',
      icon: Globe,
      color: 'text-orange-400',
      students: 180,
      level: 'Beginner',
      duration: '4 weeks',
      tags: ['Frontend', 'Web', 'Design']
    },
    {
      id: 6,
      name: 'SQL',
      description: 'Database management, complex queries, optimization, and database design principles.',
      icon: Database,
      color: 'text-green-400',
      students: 80,
      level: 'Intermediate',
      duration: '6 weeks',
      tags: ['Database', 'Backend', 'Data']
    },
    {
      id: 7,
      name: 'MongoDB',
      description: 'NoSQL database design, operations, aggregation pipelines, and integration with applications.',
      icon: Database,
      color: 'text-green-500',
      students: 60,
      level: 'Intermediate',
      duration: '5 weeks',
      tags: ['Database', 'NoSQL', 'Backend']
    },
    {
      id: 8,
      name: 'React',
      description: 'Build modern web applications with React, hooks, state management, and component architecture.',
      icon: Smartphone,
      color: 'text-cyan-400',
      students: 140,
      level: 'Intermediate',
      duration: '8 weeks',
      tags: ['Frontend', 'Web', 'Framework']
    },
    {
      id: 9,
      name: 'Node.js',
      description: 'Server-side JavaScript development, Express.js, RESTful APIs, and real-time applications.',
      icon: Server,
      color: 'text-green-600',
      students: 95,
      level: 'Intermediate',
      duration: '7 weeks',
      tags: ['Backend', 'JavaScript', 'API']
    },
    {
      id: 10,
      name: 'Angular.js',
      description: 'Build dynamic single-page applications with Angular framework and TypeScript.',
      icon: Globe,
      color: 'text-red-500',
      students: 75,
      level: 'Advanced',
      duration: '9 weeks',
      tags: ['Frontend', 'Framework', 'TypeScript']
    },
    {
      id: 11,
      name: 'Django',
      description: 'Python web framework for rapid development of secure and maintainable websites.',
      icon: Server,
      color: 'text-green-700',
      students: 85,
      level: 'Intermediate',
      duration: '8 weeks',
      tags: ['Backend', 'Python', 'Web']
    },
    {
      id: 12,
      name: 'PHP',
      description: 'Server-side scripting language for web development, including Laravel framework.',
      icon: Code,
      color: 'text-purple-500',
      students: 65,
      level: 'Beginner',
      duration: '6 weeks',
      tags: ['Backend', 'Web', 'Programming']
    },
    {
      id: 13,
      name: 'AI/ML',
      description: 'Artificial Intelligence and Machine Learning concepts with practical implementation.',
      icon: Brain,
      color: 'text-pink-500',
      students: 120,
      level: 'Advanced',
      duration: '12 weeks',
      tags: ['AI', 'Machine Learning', 'Python']
    },
    {
      id: 14,
      name: 'DSA with Python',
      description: 'Data Structures and Algorithms using Python for competitive programming and interviews.',
      icon: FileCode,
      color: 'text-blue-600',
      students: 110,
      level: 'Intermediate',
      duration: '10 weeks',
      tags: ['Algorithms', 'Python', 'Programming']
    },
    {
      id: 15,
      name: 'Software Project Management',
      description: 'Learn project management methodologies, Agile, Scrum, and team collaboration.',
      icon: Users,
      color: 'text-orange-600',
      students: 55,
      level: 'All Levels',
      duration: '6 weeks',
      tags: ['Management', 'Leadership', 'Process']
    },
    {
      id: 16,
      name: 'Prompt Engineering',
      description: 'Master the art of crafting effective prompts for AI systems and large language models.',
      icon: Lightbulb,
      color: 'text-yellow-600',
      students: 88,
      level: 'Beginner',
      duration: '4 weeks',
      tags: ['AI', 'Communication', 'Innovation']
    }
  ];

  const suggestedSearches = ['Frontend', 'Backend', 'Database', 'Programming', 'Web', 'Beginner'];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <AnimatedStars />
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Our <span className="text-primary">Courses</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover comprehensive courses designed to take you from beginner to expert
              </p>
            </div>

            {/* Search Section */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg glass border-primary/30 focus:border-primary"
                />
              </div>

              {/* Suggested Searches */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="text-sm text-muted-foreground mr-2">Popular:</span>
                {suggestedSearches.map((suggestion) => (
                  <Badge
                    key={suggestion}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary/20 border-primary/30"
                    onClick={() => setSearchTerm(suggestion)}
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => {
                const IconComponent = course.icon;
                return (
                  <Card key={course.id} className="glass hover:neon-glow transition-all duration-300 hover:scale-105 group cursor-pointer h-full flex flex-col">
                    <CardHeader className="text-center flex-shrink-0">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/50 w-fit">
                        <IconComponent className={`w-8 h-8 ${course.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <CardTitle className="text-xl">{course.name}</CardTitle>
                      <div className="flex justify-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {course.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow flex flex-col justify-between p-4">
                      <div className="space-y-3 flex-grow">
                        <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {course.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="text-sm text-accent">
                          {course.students} students enrolled
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-primary/20">
                        <Button 
                          asChild
                          className="w-full neon-glow"
                          size="sm"
                        >
                          <Link to={`/courses/${course.id}`}>Start Learning</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold mb-4">No courses found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse our popular courses
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
