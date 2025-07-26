import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Colorful geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-success rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
              Trusted Learning Partner for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Child's Bright Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Excellence in education from Nursery to 12th grade. Specialized coaching for Navodaya entrance, computer classes, and comprehensive academic support.
            </p>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-primary text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-secondary text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-0 h-auto"
              >
                Enroll Now
              </Button>
              <Button 
                asChild
                className="bg-gradient-to-r from-success to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-0 h-auto"
              >
                <a href="tel:+919876543210">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Students studying in classroom image */}
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Students studying in modern classroom" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating achievement cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">100% Results</div>
                  <div className="text-xs text-gray-600">Last Year</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Expert Teachers</div>
                  <div className="text-xs text-gray-600">B.Ed, M.Sc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
