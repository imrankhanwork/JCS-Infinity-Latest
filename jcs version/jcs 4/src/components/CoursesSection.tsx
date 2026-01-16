
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Database, Globe, Smartphone, Cpu, FileCode } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      name: 'Python',
      description: 'Learn Python programming from basics to advanced concepts',
      icon: Code,
      color: 'text-yellow-400',
      students: 150
    },
    {
      id: 2,
      name: 'Java',
      description: 'Object-oriented programming with Java',
      icon: Cpu,
      color: 'text-red-400',
      students: 120
    },
    {
      id: 3,
      name: 'C/C++',
      description: 'System programming and competitive programming',
      icon: FileCode,
      color: 'text-blue-400',
      students: 90
    },
    {
      id: 4,
      name: 'JavaScript',
      description: 'Modern JavaScript and ES6+ features',
      icon: Globe,
      color: 'text-yellow-500',
      students: 200
    },
    {
      id: 5,
      name: 'HTML/CSS',
      description: 'Web design and responsive layouts',
      icon: Globe,
      color: 'text-orange-400',
      students: 180
    },
    {
      id: 6,
      name: 'SQL',
      description: 'Database management and queries',
      icon: Database,
      color: 'text-green-400',
      students: 80
    },
    {
      id: 7,
      name: 'MongoDB',
      description: 'NoSQL database design and operations',
      icon: Database,
      color: 'text-green-500',
      students: 60
    },
    {
      id: 8,
      name: 'React',
      description: 'Build modern web applications with React',
      icon: Smartphone,
      color: 'text-cyan-400',
      students: 140
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the technologies that power the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card key={course.id} className="glass hover:neon-glow transition-all duration-300 hover:scale-105 group cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/50 w-fit">
                    <IconComponent className={`w-8 h-8 ${course.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-xl">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between p-4">
                  <div className="space-y-3 flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
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
      </div>
    </section>
  );
};

export default CoursesSection;
