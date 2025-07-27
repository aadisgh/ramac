import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center hover-lift shadow-lg">
              <GraduationCap className="text-white text-xl" size={24} />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-gray-800">Rama Coaching</h1>
              <p className="text-xs text-gray-600">Excellence in Education Since 2013</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('classes')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Classes
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover-lift transition-all duration-300 border-0 animate-pulse-glow"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('classes')}
                  className="text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Classes
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-secondary to-accent text-white border-0 mt-4"
                >
                  Enroll Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
