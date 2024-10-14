import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    fetch("./slides.json")
      .then((response) => response.json())
      .then((data) => setSlides(data));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleImageOpen = () => {
    setIsImageOpen(!isImageOpen);
  };

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Démonstration</h1>
      <div className="relative max-w-5xl h-full mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between"
          >
            <button
              onClick={toggleImageOpen}
              className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
              aria-label={`Open image ${slides[currentSlide].title}`}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </button>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {slides[currentSlide].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2 items-center">
        <Button
          onClick={prevSlide}
          className=" absolute left-28 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 transition-colors p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}

        <Button
          onClick={nextSlide}
          className="absolute right-28 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 transition-colors p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {isImageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="max-w-full max-h-full"
            onClick={toggleImageOpen}
          />
        </div>
      )}
    </div>
  );
};

export default Demo;