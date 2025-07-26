import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { type GalleryItem } from "@shared/schema";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { key: "all", label: "All Photos" },
    { key: "classroom", label: "Classrooms" },
    { key: "activities", label: "Activities" },
    { key: "achievements", label: "Achievements" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of our vibrant learning environment and student achievements
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-4">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`px-6 py-3 rounded-lg font-medium mb-2 ${
                activeFilter === filter.key 
                  ? "bg-primary text-white border-0" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 rounded-2xl h-64 w-full"></div>
                <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-3 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full h-64 object-cover"
                />
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600">No items found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
