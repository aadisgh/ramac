import { Check, Baby, Book, GraduationCap, Atom, Trophy, Laptop } from "lucide-react";

export default function ClassesSection() {
  const classes = [
    {
      icon: Baby,
      title: "Nursery to UKG",
      description: "Foundation building with play-based learning, basic concepts, and personality development.",
      features: ["Play-based learning", "Basic concepts", "Creative activities"],
      gradient: "from-pink-50 to-purple-50",
      iconGradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Book,
      title: "Class 1 to 8",
      description: "Strong academic foundation with all subjects covered by expert teachers.",
      features: ["All subjects covered", "Regular assessments", "Doubt clearing sessions"],
      gradient: "from-blue-50 to-cyan-50",
      iconGradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Class 9 & 10",
      description: "Board exam preparation with comprehensive study materials and mock tests.",
      features: ["Board exam focus", "Mock tests", "Career guidance"],
      gradient: "from-green-50 to-teal-50",
      iconGradient: "from-green-500 to-teal-500",
    },
    {
      icon: Atom,
      title: "Class 11 & 12",
      description: "Specialized coaching for Science and Arts streams with entrance exam preparation.",
      features: ["Science & Arts streams", "Entrance exam prep", "College counseling"],
      gradient: "from-orange-50 to-red-50",
      iconGradient: "from-orange-500 to-red-500",
    },
    {
      icon: Trophy,
      title: "Navodaya Entrance",
      description: "Specialized coaching for Navodaya Vidyalaya entrance examination with proven results.",
      features: ["Expert guidance", "Practice tests", "High success rate"],
      gradient: "from-yellow-50 to-amber-50",
      iconGradient: "from-yellow-500 to-amber-500",
      featured: true,
    },
    {
      icon: Laptop,
      title: "Computer Classes",
      description: "Modern computer education with practical training on latest software and technologies.",
      features: ["Latest software", "Hands-on training", "Certificate courses"],
      gradient: "from-purple-50 to-indigo-50",
      iconGradient: "from-purple-500 to-indigo-500",
      featured: true,
    },
  ];

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Classes Offered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive education programs from Nursery to 12th grade with specialized courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => {
            const IconComponent = classItem.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${classItem.gradient} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                  classItem.featured ? 'border-2 border-accent' : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${classItem.iconGradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white text-2xl" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">{classItem.title}</h3>
                <p className="text-gray-600 mb-4">{classItem.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {classItem.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-success mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Batch Timings */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="font-poppins font-semibold text-2xl text-center mb-8">Flexible Batch Timings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 text-primary">Morning Batches</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Classes 1-5:</span>
                  <span>8:00 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes 6-8:</span>
                  <span>10:15 AM - 12:15 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes 9-10:</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 text-secondary">Evening Batches</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Classes 1-5:</span>
                  <span>4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes 6-8:</span>
                  <span>6:15 PM - 8:15 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes 11-12:</span>
                  <span>2:00 PM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
