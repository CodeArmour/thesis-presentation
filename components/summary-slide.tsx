"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Calendar, Globe } from "lucide-react"

interface SummarySlideProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function SummarySlide({ mouseX, mouseY }: SummarySlideProps) {
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
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12 py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]"
        />
        <motion.div
          style={{ x: useTransform(mouseX, [-0.5, 0.5], [15, -15]), y: useTransform(mouseY, [-0.5, 0.5], [15, -15]) }}
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]"
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,500 Q400,450 800,500 T1600,500"
            stroke="url(#gradient3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M0,600 Q400,550 800,600 T1600,600"
            stroke="url(#gradient3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
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
            Összegzés és továbblépés
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
        className="relative z-10 mb-12 max-w-2xl text-center text-xl text-white/80"
      >
        <p>A rendszer már működőképes, demó verzió kész.</p>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 mb-8 text-2xl font-semibold"
      >
        <span className="relative">
          Jövőbeli tervek
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-purple-500/70 to-transparent"
          />
        </span>
      </motion.h3>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 mb-16 grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-3"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/40 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
            <div className="mb-4 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 p-4 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:shadow-blue-500/30">
              <Mail className="h-8 w-8 text-blue-400" />
            </div>
            <h4 className="text-lg font-medium">E-mail értesítések integrálása</h4>
            <p className="mt-2 text-sm text-white/70">Automatikus értesítések küldése a résztvevőknek</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/40 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
            <div className="mb-4 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/20 p-4 shadow-lg shadow-green-500/10 transition-all duration-300 group-hover:shadow-green-500/30">
              <Calendar className="h-8 w-8 text-green-400" />
            </div>
            <h4 className="text-lg font-medium">Google Calendar szinkronizáció</h4>
            <p className="mt-2 text-sm text-white/70">Események automatikus szinkronizálása a naptárral</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/40 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
            <div className="mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-4 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:shadow-purple-500/30">
              <Globe className="h-8 w-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-medium">Többnyelvűség</h4>
            <p className="mt-2 text-sm text-white/70">Nemzetközi felhasználók támogatása több nyelven</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 mt-8 text-center"
      >
        <div className="relative inline-block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-500/30 blur-[30px]"
          />
          <h3 className="mb-4 text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Köszönöm a figyelmet!
          </h3>
        </div>
        <p className="text-xl text-white/80">Várom a kérdéseket.</p>
      </motion.div>
    </div>
  )
}
