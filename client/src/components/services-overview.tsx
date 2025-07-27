import { Presentation, Laptop, Award, BookOpen } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: Presentation,
      title: "Expert Teaching",
      description: "Qualified teachers with B.Ed, M.Sc degrees and 10+ years experience",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-primary",
    },
    {
      icon: Laptop,
      title: "Computer Classes",
      description: "Modern computer lab with latest software and practical training",
      gradient: "from-orange-50 to-orange-100",
      iconBg: "bg-secondary",
    },
    {
      icon: Award,
      title: "Navodaya Prep",
      description: "Specialized coaching for Navodaya Vidyalaya entrance examination",
      gradient: "from-yellow-50 to-yellow-100",
      iconBg: "bg-accent",
    },
    {
      icon: BookOpen,
      title: "Free Materials",
      description: "Comprehensive study materials and weekly tests included at no extra cost",
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-success",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Why Choose Rama Coaching?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive education solutions designed to unlock your child's potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 text-center hover:shadow-xl hover-lift transition-all duration-300 animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 hover-lift shadow-lg animate-bounce-in`}>
                  <IconComponent className="text-white text-2xl" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
