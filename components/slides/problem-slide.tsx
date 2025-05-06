"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CalendarX, Users, MessageSquare } from "lucide-react"

export default function ProblemSlide() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[100px]"
        />
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
          className="group flex flex-col items-center rounded-xl bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/5"
        >
          <div className="mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-blue-600/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <CalendarX className="h-8 w-8 text-blue-400 transition-all duration-300 group-hover:text-blue-300" />
          </div>
          <p className="text-lg">Eseményeket lehet létrehozni</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group flex flex-col items-center rounded-xl bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/5"
        >
          <div className="mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-purple-600/30 group-hover:shadow-lg group-hover:shadow-purple-500/20">
            <Users className="h-8 w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-300" />
          </div>
          <p className="text-lg">Résztvevőket kezelni</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group flex flex-col items-center rounded-xl bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/5"
        >
          <div className="mb-6 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-teal-500/30 group-hover:to-teal-600/30 group-hover:shadow-lg group-hover:shadow-teal-500/20">
            <MessageSquare className="h-8 w-8 text-teal-400 transition-all duration-300 group-hover:text-teal-300" />
          </div>
          <p className="text-lg">Visszajelzéseket gyűjteni</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="relative z-10 mt-8 max-w-2xl"
      >
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-1">
          <div className="rounded-lg bg-black/20 p-6 backdrop-blur-md">
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
