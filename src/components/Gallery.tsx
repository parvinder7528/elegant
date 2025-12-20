import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Images
import serviceSpa from "@/assets/service-spa.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceHeadSpa from "@/assets/service-headspa.jpg";
import serviceMakeover from "@/assets/service-makeover.jpg";
import heroSalon from "@/assets/hero-salon.jpg";
import aboutAtmosphere from "@/assets/about-atmosphere.jpg";
import location2 from "@/assets/location-2.jpg";

const galleryImages = [
  { src: heroSalon, title: "Luxury Salon Interior", desc: "Elegant premium interiors", category: "Interior" },
  { src: aboutAtmosphere, title: "Premium Products", desc: "Top quality beauty essentials", category: "Interior" },
  { src: location2, title: "Salon Atmosphere", desc: "Relaxing luxury environment", category: "Interior" },

  { src: serviceHair, title: "Hair Styling", desc: "Professional hair treatments", category: "Hair" },
  { src: serviceMakeover, title: "Makeup Artistry", desc: "Expert makeover sessions", category: "Makeup" },
  { src: serviceNails, title: "Nail Art", desc: "Creative nail designs", category: "Nails" },
  { src: serviceSpa, title: "Spa Therapy", desc: "Relaxing spa treatments", category: "Spa" },
  { src: serviceHeadSpa, title: "Head Spa", desc: "Rejuvenating scalp care", category: "Head Spa" },
];

const categories = ["All", "Interior", "Hair", "Nails", "Spa", "Head Spa", "Makeup"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
      backgroundImage:
        'url("https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/7f7f216caf7709e4eb4d641a3290384b.png")'
    }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif mb-3">Our Gallery</h1>
          <p className="text-xl">Discover the artistry of E'LAN BEAUTY</p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-rose-400 text-white shadow-lg"
                      : "bg-stone-100 text-stone-700 hover:bg-rose-100 hover:text-rose-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold">{img.title}</h3>
                      <p className="text-sm opacity-90">{img.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}

            {filteredImages.length === 0 && (
              <p className="text-center text-stone-500 col-span-full">
                No images found for this category
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-stone-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-4">Ready to Experience E'LAN BEAUTY?</h2>
          <p className="text-stone-600 mb-8">
            Book your appointment today and let our experts take care of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition">
              Book Your Appointment
            </button>
            <button className="px-8 py-4 border-2 border-rose-400 text-rose-400 rounded-lg hover:bg-rose-400 hover:text-white transition">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
