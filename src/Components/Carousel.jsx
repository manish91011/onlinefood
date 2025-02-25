import React, { useState } from "react";

const images = [
  "./src/assets/momo.jpg",
  "./src/assets/rool.jpg",
  "./src/assets/pizza.jpg",
  "./src/assets/sekuwa.jpg",
  "./src/assets/leg.webp",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full pt-4">
      {/* Carousel Wrapper */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/40 p-2 rounded-full hover:bg-white/60"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/40 p-2 rounded-full hover:bg-white/60"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;
