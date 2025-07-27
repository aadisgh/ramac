import { Check, Baby, Book, GraduationCap, Atom, Trophy, Laptop } from "lucide-react";

export default function ClassesSection() {
  const getSubjectsForClass = (title: string) => {
    switch (title) {
      case "Nursery to UKG":
        return ["English", "Hindi", "Math", "EVS", "Drawing"];
      case "Class 1st to 8th":
        return ["English", "Hindi", "Math", "Science", "Social Studies"];
      case "Class 9th & 10th":
        return ["Math", "Science", "English", "Hindi", "Social Studies"];
      case "Class 11th & 12th":
        return ["Physics", "Chemistry", "Biology", "Math", "Arts Subjects"];
      case "Navodaya Entrance":
        return ["Mental Ability", "Arithmetic", "Language Test"];
      case "Computer Classes":
        return ["Basic Computer", "MS Office", "Programming Basics", "Internet"];
      default:
        return [];
    }
  };

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
      title: "Class 1st to 8th",
      description: "Strong academic foundation with all subjects covered by experienced teachers.",
      features: ["All subjects covered", "Regular assessments", "Doubt clearing sessions"],
      gradient: "from-blue-50 to-cyan-50",
      iconGradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Class 9th & 10th",
      description: "Complete board exam preparation with all subjects coverage and intensive practice.",
      features: ["All subjects covered", "Board exam focus", "Mock tests", "Weekly assessments"],
      gradient: "from-green-50 to-teal-50",
      iconGradient: "from-green-500 to-teal-500",
      featured: true,
    },
    {
      icon: Atom,
      title: "Class 11th & 12th",
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
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover-lift transition-all duration-300 animate-fade-in border border-gray-100 ${
                  classItem.featured ? 'border-2 border-primary ring-2 ring-primary/20' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {classItem.featured && (
                  <div className="absolute -top-3 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                
                <div className={`w-14 h-14 bg-gradient-to-br ${classItem.iconGradient} rounded-xl flex items-center justify-center mb-4 hover-lift shadow-md`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                
                <h3 className="font-poppins font-bold text-lg mb-2 text-gray-800">{classItem.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{classItem.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Subjects Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {getSubjectsForClass(classItem.title).map((subject) => (
                      <span key={subject} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {classItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center animate-slide-up" style={{animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`}}>
                        <Check className="text-green-500 mr-2" size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift">
                  Enroll Now
                </button>
              </div>
            );
          })}
        </div>

        {/* What Makes Us Special Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8">
          <h3 className="font-poppins font-bold text-2xl text-center mb-8 text-gray-800">What Makes Us Special?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Free Study Material</h4>
              <p className="text-gray-600 text-sm">Complete study materials provided at no extra cost</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Weekly Tests & Assessments</h4>
              <p className="text-gray-600 text-sm">Regular evaluation to track student progress</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-purple-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Parent-Teacher Meetings</h4>
              <p className="text-gray-600 text-sm">Regular communication with parents about progress</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="text-orange-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Individual Attention</h4>
              <p className="text-gray-600 text-sm">Personal attention to every student's needs</p>
            </div>
          </div>
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
