import { GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Educational coaching center exterior image */}
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern educational coaching center exterior building" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              About Rama Coaching Center
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with a vision to provide quality education accessible to all, Rama Coaching Center has been nurturing young minds for over a decade. Our commitment to excellence and personalized attention has made us a trusted name in education.
            </p>

            {/* Founder Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white text-2xl" size={32} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-2">Mrs. Pushpa</h3>
                  <p className="text-gray-600 mb-2">B.Ed, M.Sc., 10+ Years Experience</p>
                  <p className="text-gray-600">Founder & Principal Educator dedicated to shaping the future of every student with personalized attention and innovative teaching methods.</p>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-sm text-gray-600">Active Batches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-gray-600">Subjects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
