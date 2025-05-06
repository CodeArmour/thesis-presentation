"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Database, Layout, Lock, Palette, Cloud, QrCode, Brain } from "lucide-react"

interface SolutionSlideProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function SolutionSlide({ mouseX, mouseY }: SolutionSlideProps) {
  const [techStackRef, techStackInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-y-auto px-12 py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute left-0 top-[30%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]"
        />

        {/* 3D Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 right-10 h-[300px] w-[300px] opacity-20"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M100,20 L180,70 L100,120 L20,70 Z"
              fill="none"
              stroke="rgba(168, 85, 247, 0.8)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M100,120 L100,180"
              fill="none"
              stroke="rgba(168, 85, 247, 0.8)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            <motion.path
              d="M20,70 L20,130 L100,180 L180,130 L180,70"
              fill="none"
              stroke="rgba(168, 85, 247, 0.8)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-4"
      >
        <h2 className="text-center text-4xl font-bold">
          <span className="relative">
            A megoldás (technikai részletek)
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </span>
        </h2>
      </motion.div>

      <div className="relative z-10 mt-8 grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          ref={techStackRef}
          variants={containerVariants}
          initial="hidden"
          animate={techStackInView ? "show" : "hidden"}
          className="flex flex-col space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-2xl font-semibold"
          >
            <span className="relative">
              Technológiai stack
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-purple-500/70 to-transparent"
              />
            </span>
          </motion.h3>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 p-3 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:shadow-blue-500/30">
                <Layout className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <span className="font-semibold">Frontend:</span> Next.js 15 + React 19 + TailwindCSS
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-green-500/30 to-green-600/20 p-3 shadow-lg shadow-green-500/10 transition-all duration-300 group-hover:shadow-green-500/30">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <span className="font-semibold">Adatbázis:</span> PostgreSQL + Prisma ORM
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-3 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:shadow-purple-500/30">
                <Lock className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <span className="font-semibold">Autentikáció:</span> NextAuth / Auth.js
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 p-3 shadow-lg shadow-yellow-500/10 transition-all duration-300 group-hover:shadow-yellow-500/30">
                <Palette className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <span className="font-semibold">UI Komponensek:</span> Radix UI + Framer Motion
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-teal-500/30 to-teal-600/20 p-3 shadow-lg shadow-teal-500/10 transition-all duration-300 group-hover:shadow-teal-500/30">
                <Cloud className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <span className="font-semibold">Média kezelés:</span> Cloudinary
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-3 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:shadow-purple-500/30">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <span className="font-semibold">AI integráció:</span> Google Gemini
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="group flex items-center gap-4 rounded-lg bg-gradient-to-r from-black/50 to-black/30 p-[1px] backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex w-full items-center gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm transition-all duration-300">
              <div className="rounded-full bg-gradient-to-br from-red-500/30 to-red-600/20 p-3 shadow-lg shadow-red-500/10 transition-all duration-300 group-hover:shadow-red-500/30">
                <QrCode className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <span className="font-semibold">Extra funkciók:</span> QR kód generálás, kettős nézet
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "show" : "hidden"}
          className="flex flex-col"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-2xl font-semibold"
          >
            <span className="relative">
              Fő funkciók
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-purple-500/70 to-transparent"
              />
            </span>
          </motion.h3>

          <div className="grid gap-4">
            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-500/5 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="rounded-lg bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                <h4 className="text-lg font-medium">Esemény létrehozása / szerkesztése</h4>
                <p className="text-sm text-white/70">Intuitív felület az események részletes adatainak megadásához</p>
              </div>
            </motion.div>

            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-500/5 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="rounded-lg bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                <h4 className="text-lg font-medium">Regisztráció eseményekre</h4>
                <p className="text-sm text-white/70">QR kód alapú beléptetés és résztvevő kezelés</p>
              </div>
            </motion.div>

            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group rounded-lg bg-gradient-to-r from-teal-500/20 to-teal-500/5 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="rounded-lg bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                <h4 className="text-lg font-medium">Résztvevők kezelése admin felületen</h4>
                <p className="text-sm text-white/70">Átfogó adminisztrációs felület a szervezők számára</p>
              </div>
            </motion.div>

            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-500/5 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="rounded-lg bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                <h4 className="text-lg font-medium">Gemini AI asszisztens</h4>
                <p className="text-sm text-white/70">Felhasználói preferenciák elemzése és személyre szabása</p>
              </div>
            </motion.div>

            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-500/5 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="rounded-lg bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                <h4 className="text-lg font-medium">Kettős nézet</h4>
                <p className="text-sm text-white/70">Kártya és naptár nézet az események megjelenítéséhez</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
