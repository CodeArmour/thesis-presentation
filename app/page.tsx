"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import TitleSlide from "@/components/slides/title-slide"
import ProblemSlide from "@/components/slides/problem-slide"
import SolutionSlide from "@/components/slides/solution-slide"
import FunctionalitySlide from "@/components/slides/functionality-slide"
import SummarySlide from "@/components/slides/summary-slide"
import { useMobile } from "@/hooks/use-mobile"
import ParticleBackground from "@/components/particle-background"

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    }

    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 10 : -10,
    }),
  }

  const [direction, setDirection] = useState(1)

  const handleNext = () => {
    setDirection(1)
    nextSlide()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevSlide()
  }

  // Progress bar calculation
  const progress = (currentSlide / (totalSlides - 1)) * 100

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-screen overflow-hidden bg-[#080510] perspective-1000"
    >
      {/* Particle background */}
      <ParticleBackground mouseX={mouseX} mouseY={mouseY} />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
            y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
          }}
          className="absolute -left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[150px]"
        />
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [20, -20]),
            y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
          }}
          className="absolute -right-[5%] top-[40%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[150px]"
        />
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
            y: useTransform(mouseY, [-0.5, 0.5], [-15, 15]),
          }}
          className="absolute bottom-[10%] left-[30%] h-[450px] w-[450px] rounded-full bg-purple-500/5 blur-[150px]"
        />

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Top navigation bar with logo and progress */}
      <div className="absolute top-0 z-50 flex w-full items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-events-hub-Q6hAWTKmH6da4jM4oNjWWOr218HOIB.png"
            alt="EventHub Logo"
            className="h-8 w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/2 max-w-md"
        >
          <div className="h-1 w-full rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
            rotateY: { duration: 0.4 },
          }}
          className="relative z-10 h-full w-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {currentSlide === 0 && <TitleSlide mouseX={mouseX} mouseY={mouseY} />}
          {currentSlide === 1 && <ProblemSlide mouseX={mouseX} mouseY={mouseY} />}
          {currentSlide === 2 && <SolutionSlide mouseX={mouseX} mouseY={mouseY} />}
          {currentSlide === 3 && <FunctionalitySlide mouseX={mouseX} mouseY={mouseY} />}
          {currentSlide === 4 && <SummarySlide mouseX={mouseX} mouseY={mouseY} />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />

            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {index === 0 && "Címlap"}
              {index === 1 && "Probléma"}
              {index === 2 && "Megoldás"}
              {index === 3 && "Funkciók"}
              {index === 4 && "Összegzés"}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/5 p-3 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 disabled:opacity-0"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentSlide === totalSlides - 1}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/5 p-3 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 disabled:opacity-0"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}
