import { useQuery } from "@tanstack/react-query";
import { Megaphone, ArrowRight } from "lucide-react";
import { type Notice } from "@shared/schema";

export default function NoticeBoardSection() {
  const { data: notices = [], isLoading } = useQuery<Notice[]>({
    queryKey: ["/api/notices"],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "URGENT":
        return { bg: "bg-primary", text: "text-primary", border: "border-primary" };
      case "UPDATE":
        return { bg: "bg-success", text: "text-success", border: "border-success" };
      case "EXAM":
        return { bg: "bg-secondary", text: "text-secondary", border: "border-secondary" };
      default:
        return { bg: "bg-primary", text: "text-primary", border: "border-primary" };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            <Megaphone className="inline-block text-accent mr-3" size={40} />
            Notice Board
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with latest announcements, exam schedules, and important notifications
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse bg-white rounded-2xl p-6 h-48"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notices.map((notice) => {
              const styles = getTypeStyles(notice.type);
              return (
                <div 
                  key={notice.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${styles.border}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${styles.bg} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                      {notice.type}
                    </span>
                    <span className="text-gray-500 text-sm">{notice.date}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {notice.content}
                  </p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`${styles.text} font-medium flex items-center hover:opacity-70 transition-opacity`}
                  >
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
