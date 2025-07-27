import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <h3 className="font-poppins font-bold text-xl mb-2">Rama Coaching Center</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Trusted Learning Partner for Your Child's Bright Future. Providing Quality Education from Nursery to 12th grade with specialized coaching for programs.
              </p>
            </div>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('classes')}
                  className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                >
                  Admissions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Nursery to UKG</li>
              <li>Class 1st to 8th</li>
              <li>Class 9th & 10th</li>
              <li>Class 11th & 12th</li>
              <li>Navodaya Entrance</li>
              <li>Computer Classes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={16} />
                <div className="text-gray-300">
                  <p>123 Education Street</p>
                  <p>Academic Zone, City</p>
                  <p>Pin Code: 123456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={16} />
                <div className="text-gray-300">
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={16} />
                <div className="text-gray-300">
                  <p>info@ramacoaching.com</p>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Support */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Need Help?</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
              >
                <FaWhatsapp className="mr-2" size={14} />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 Rama Coaching Center. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
