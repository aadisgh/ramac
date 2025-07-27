import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Users, Award, BookOpen } from "lucide-react";

export default function HeroSection() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Animated count-up effect
    const duration = 2000;
    const studentsTarget = 500;
    const experienceTarget = 10;
    const successTarget = 95;

    const animateCount = (target: number, setter: (value: number) => void) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCount(studentsTarget, setStudentsCount);
      animateCount(experienceTarget, setExperienceCount);
      animateCount(successTarget, setSuccessRate);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced colorful geometric background with Pixar-style elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-success rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary rounded-full opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
              <span className="text-primary font-medium text-sm">🎓 Excellence in Education Since 2013</span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
              Trusted Learning Partner for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
                Child's Bright Future
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Excellence in education from <strong>1st to 12th grade</strong>. Specialized coaching for <strong>Navodaya entrance</strong>, <strong>computer classes</strong>, and comprehensive academic support with expert guidance.
            </p>
            
            {/* Enhanced Key Highlights with animated counters */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-lg hover-lift animate-bounce-in">
                <div className="text-primary text-2xl font-bold animate-count-up">{experienceCount}+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg hover-lift animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <div className="text-secondary text-2xl font-bold animate-count-up">{studentsCount}+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg hover-lift animate-bounce-in" style={{animationDelay: '0.4s'}}>
                <div className="text-success text-2xl font-bold animate-count-up">{successRate}%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with better animations */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover-lift hover-glow transition-all duration-300 border-0 h-auto animate-pulse-glow"
              >
                <Users className="mr-2" size={20} />
                Join Now
              </Button>
              <Button 
                asChild
                className="bg-gradient-to-r from-success to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover-lift transition-all duration-300 border-0 h-auto"
              >
                <a href="tel:+919876543210">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Special highlight for Navodaya */}
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-l-4 border-accent">
              <div className="flex items-center">
                <Award className="text-accent mr-2" size={20} />
                <span className="font-semibold text-gray-800">Navodaya Vidyalaya Entrance Preparation</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Specialized coaching with proven track record</p>
            </div>
          </div>

          <div className="relative animate-slide-up">
            {/* Enhanced hero image with better styling */}
            <div className="relative">
              <img 
                src="@assets/image_1753602543566.png" 
                alt="Pixar-style 3D animation of students learning together" 
                className="rounded-2xl shadow-2xl w-full h-auto hover-lift transition-all duration-500"
              />
              
              {/* Enhanced floating achievement cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl hover-lift animate-bounce-in">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-800">100% Results</div>
                    <div className="text-xs text-gray-600">Board Exams 2024</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl hover-lift animate-bounce-in" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-800">Expert Teachers</div>
                    <div className="text-xs text-gray-600">M.Sc, B.Ed Qualified</div>
                  </div>
                </div>
              </div>

              {/* Computer Classes highlight */}
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-secondary to-orange-600 text-white rounded-xl p-3 shadow-xl animate-bounce-in transform -translate-y-1/2" style={{animationDelay: '0.6s'}}>
                <div className="text-center">
                  <div className="font-bold text-sm">Computer Classes</div>
                  <div className="text-xs opacity-90">Modern Lab Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
