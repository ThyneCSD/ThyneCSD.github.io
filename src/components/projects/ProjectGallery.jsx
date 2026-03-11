import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../icons/icons.jsx";

export default function ProjectGallery({ project }) {
  const { screenshots, youtube } = project;

  // Combineer video (als eerste) en screenshots in één array
  const slides = [
    ...(youtube ? [{ type: "video", src: youtube }] : []),
    ...screenshots.map((s) => ({ type: "image", src: s })),
  ];

  // Track huidige slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigatie functies
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mb-12 mx-4">
      <h2 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
        <span className="w-8 h-[1px] bg-emerald-500/50"></span>
        Gallery
      </h2>

      {slides.length > 0 && (
        <div className="relative group mt-4 h-fit">
          {/* Photo frame effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Slide Container */}
          <div className="relative overflow-hidden bg-black/40 rounded-xl border border-white/10 aspect-video shadow-2xl">
            {/* Video Slide */}
            {slides[currentIndex].type === "video" && (
              <iframe
                src={slides[currentIndex].src}
                title="Project Video"
                allowFullScreen
                className="w-full h-full"
              />
            )}

            {/* Image Slide */}
            {slides[currentIndex].type === "image" && (
              <img
                src={slides[currentIndex].src}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                onClick={() => window.open(slides[currentIndex].src, "_blank")}
              />
            )}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full 
                           bg-black/60 text-white border border-white/10 opacity-0 group-hover:opacity-100 
                           hover:bg-emerald-500 hover:text-black transition-all duration-300 backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full 
                           bg-black/60 text-white border border-white/10 opacity-0 group-hover:opacity-100 
                           hover:bg-emerald-500 hover:text-black transition-all duration-300 backdrop-blur-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? "bg-emerald-400 w-8" 
                        : "bg-white/30 w-1.5 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}