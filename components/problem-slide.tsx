"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CalendarX, Users, MessageSquare } from "lucide-react"

interface ProblemSlideProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function ProblemSlide({ mouseX, mouseY }: ProblemSlideProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Parallax effect
  const bgX = useTransform(mouseX, [-0.5, 0.5], [-15, 15])
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-15, 15])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-12 py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[100px]"
        />

        {/* Animated diagram */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-[300px] w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,50 C150,150 350,0 500,100 C650,200 850,50 1000,100"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-4"
      >
        <h2 className="text-center text-4xl font-bold">
          <span className="relative">
            A probléma és célkitűzés
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 mb-10 max-w-2xl text-center text-xl text-white/80"
      >
        <p>Az események szervezése és nyilvántartása sokszor nehézkes és széttagolt.</p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/40 p-8 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
            <div className="mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 p-5 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:shadow-blue-500/30">
              <CalendarX className="h-8 w-8 text-blue-400 transition-all duration-300 group-hover:text-blue-300" />
            </div>
            <p className="text-lg">Eseményeket lehet létrehozni</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/40 p-8 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
            <div className="mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-5 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:shadow-purple-500/30">
              <Users className="h-8 w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-300" />
            </div>
            <p className="text-lg">Résztvevőket kezelni</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/40 p-8 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
            <div className="mb-6 rounded-full bg-gradient-to-br from-teal-500/30 to-teal-600/20 p-5 shadow-lg shadow-teal-500/10 transition-all duration-300 group-hover:shadow-teal-500/30">
              <MessageSquare className="h-8 w-8 text-teal-400 transition-all duration-300 group-hover:text-teal-300" />
            </div>
            <p className="text-lg">Visszajelzéseket gyűjteni</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="relative z-10 mt-8 max-w-2xl"
      >
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-[1px] shadow-lg shadow-purple-500/10">
          <div className="rounded-lg bg-black/50 p-6 backdrop-blur-md">
            <h3 className="mb-3 text-center text-2xl font-semibold">Cél:</h3>
            <p className="text-center text-lg text-white/90">
              Egy modern, reszponzív webalkalmazás fejlesztése, amely segíti a szervezőket és a résztvevőket is.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
