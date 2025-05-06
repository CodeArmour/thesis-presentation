"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect } from "react"

interface TitleSlideProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function TitleSlide({ mouseX, mouseY }: TitleSlideProps) {
  const logoRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect based on mouse position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  // Parallax effect for decorative elements
  const bgX1 = useTransform(mouseX, [-0.5, 0.5], [-20, 20])
  const bgY1 = useTransform(mouseY, [-0.5, 0.5], [-20, 20])
  const bgX2 = useTransform(mouseX, [-0.5, 0.5], [20, -20])
  const bgY2 = useTransform(mouseY, [-0.5, 0.5], [20, -20])

  // Logo glow effect
  useEffect(() => {
    if (!logoRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = logoRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }

      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      const distance = Math.sqrt(x * x + y * y)

      // Update glow position and intensity based on mouse distance
      const glowElement = logoRef.current?.querySelector(".logo-glow") as HTMLElement
      if (glowElement) {
        const intensity = Math.max(0.4, 1 - distance * 2)
        glowElement.style.opacity = intensity.toString()
        glowElement.style.transform = `translate(${x * 30}px, ${y * 30}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12 text-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: bgX1, y: bgY1 }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10 blur-[80px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q400,150 800,100 T1600,100"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M0,200 Q400,250 800,200 T1600,200"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.path
            d="M0,300 Q400,350 800,300 T1600,300"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-8"
      >
        <motion.div
          ref={logoRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            transformPerspective: 1000,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="relative mx-auto mb-10 w-[400px]"
        >
          <div className="relative">
            {/* Logo glow effect */}
            <div className="logo-glow absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-[40px] transition-all duration-300" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [0.95, 1.02, 1],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              style={{ transformStyle: "preserve-3d", translateZ: 30 }}
              className="relative z-10"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-events-hub-Q6hAWTKmH6da4jM4oNjWWOr218HOIB.png"
                alt="EventHub Logo"
                width={400}
                height={160}
                className="relative z-10 mx-auto drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl font-light tracking-wide text-white/90"
        >
          <span className="relative">
            Fullstack webalkalmazás eseménykezeléshez
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-0 left-0 right-0 h-[1px] origin-left bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 mb-12 mt-12"
      >
        <div className="text-xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="mb-2 font-medium"
          >
            Előadó: [Neved]
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="text-white/70"
          >
            Tanszék / TDK témavezető: [pl. Műszaki Informatikai Intézet / Témavezető neve]
          </motion.p>
        </div>
      </motion.div>

      {/* Floating badges */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-white/80">Működő prototípus</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-purple-500"></span>
          <span className="text-sm font-medium text-white/80">AI integráció</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.5 }}
          className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-sm font-medium text-white/80">Fullstack megoldás</span>
        </motion.div>
      </div>
    </div>
  )
}
