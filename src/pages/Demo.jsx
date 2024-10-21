import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Slide = memo(({ slide, toggleImageOpen }) => (
  <motion.div
    key={slide.title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className='bg-white dark:bg-gray-800 px-8 py-6 rounded-lg shadow-lg h-full flex flex-col justify-between'
  >
    <button
      onClick={toggleImageOpen}
      className='w-full max-h-[50vh] object-cover h-full rounded-lg mb-4 cursor-pointer'
      aria-label={`Open image ${slide.title}`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className='w-full h-full object-cover rounded-lg'
      />
    </button>
    <div className='my-auto'>
      <h2 className='text-2xl font-semibold mb-4'>{slide.title}</h2>
      <p className='text-gray-600 dark:text-gray-300'>{slide.description}</p>
    </div>
  </motion.div>
))

const Demo = () => {
  const [slides, setSlides] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isImageOpen, setIsImageOpen] = useState(false)

  useEffect(() => {
    fetch('./slides.json')
      .then((response) => response.json())
      .then((data) => setSlides(data))
  }, [])

  const toggleImageOpen = useCallback(() => {
    setIsImageOpen(!isImageOpen)
  }, [isImageOpen])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    )
  }, [slides.length])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        prevSlide()
      }
    },
    [nextSlide, prevSlide]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (!slides.length) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='loader' />
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8 h-screen max-h-[90vh] flex justify-center flex-col'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Démonstration</h1>
      <div className='relative h-full mx-auto w-full'>
        <AnimatePresence mode='wait'>
          <Slide slide={slides[currentSlide]} toggleImageOpen={toggleImageOpen} />
        </AnimatePresence>
      </div>

      <div className='flex justify-center mt-6 space-x-2 items-center'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? 'bg-blue-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {isImageOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className='max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg cursor-pointer'
            onClick={toggleImageOpen}
          />
        </div>
      )}
    </div>
  )
}

export default Demo