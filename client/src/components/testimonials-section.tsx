import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { type Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const gradients = [
    "from-blue-50 to-indigo-50",
    "from-green-50 to-teal-50",
    "from-orange-50 to-red-50",
  ];

  const iconGradients = [
    "from-primary to-blue-600",
    "from-success to-green-600",
    "from-secondary to-red-600",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from parents and students who have experienced our quality education
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-100 rounded-2xl p-8 h-64"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl p-8 hover:shadow-xl hover-lift transition-all duration-300 animate-slide-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${iconGradients[index % iconGradients.length]} rounded-full flex items-center justify-center text-white font-bold text-lg hover-lift shadow-lg`}>
                    {getInitials(testimonial.parentName)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.parentName}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.relation}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(parseInt(testimonial.rating))].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="text-accent fill-current animate-bounce-in" 
                      size={18}
                      style={{animationDelay: `${(index * 0.2) + (starIndex * 0.1)}s`}}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.feedback}"</p>
                
                {/* Quote marks decoration */}
                <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">"</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
