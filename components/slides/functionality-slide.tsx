"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Smartphone, List, UserPlus, ShieldCheck, Calendar, LayoutGrid, Brain } from "lucide-react"
import Image from "next/image"

export default function FunctionalitySlide() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [aiRef, aiInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-y-auto px-12 py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-[60%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]"
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
            Funkcionalitások / Demó
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </span>
        </h2>
      </motion.div>

      

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative z-10 mb-6 text-2xl font-semibold"
      >
        <span className="relative">
          Fő képernyők
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-purple-500/70 to-transparent"
          />
        </span>
      </motion.h3>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div
          variants={itemVariants}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/5 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/20 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/30">
            <div className="mb-4 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <List className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Esemény lista</h4>
            <p className="text-sm text-white/70">Áttekinthető lista az elérhető és korábbi eseményekről</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/5 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/20 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/30">
            <div className="mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
              <UserPlus className="h-6 w-6 text-purple-400" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Regisztrációs oldal</h4>
            <p className="text-sm text-white/70">QR kód alapú regisztráció és beléptetés</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/5 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/20 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/30">
            <div className="mb-4 rounded-full bg-gradient-to-br from-teal-500/30 to-teal-600/20 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/20">
              <ShieldCheck className="h-6 w-6 text-teal-400" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Admin panel</h4>
            <p className="text-sm text-white/70">Átfogó kezelőfelület a szervezők számára</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-white/5 to-transparent p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
        >
          <div className="flex h-full w-full flex-col items-center rounded-xl bg-black/20 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/30">
            <div className="mb-4 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/20 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/20">
              <Smartphone className="h-6 w-6 text-orange-400" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Mobilbarát kialakítás</h4>
            <p className="text-sm text-white/70">Reszponzív felület minden eszközön való használathoz</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={aiRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-12 w-full max-w-4xl"
      >
        <motion.h3
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={aiInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-semibold"
        >
          <span className="relative">
            Speciális funkciók
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-purple-500/70 to-transparent"
            />
          </span>
        </motion.h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="rounded-xl bg-black/30 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-medium">Gemini AI integráció</h4>
              </div>
              <p className="mb-3 text-white/80">
                A Google Gemini AI elemzi a felhasználói adatokat és személyre szabja a preferenciákat:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-sm text-white/70">
                <li>Felhasználói viselkedés elemzése</li>
                <li>Automatikus preferencia frissítés</li>
                <li>Személyre szabott esemény ajánlások</li>
                <li>Intelligens értesítések</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/10 p-[1px] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="rounded-xl bg-black/30 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 p-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <LayoutGrid className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="rounded-full bg-gradient-to-br from-teal-500/30 to-teal-600/20 p-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/20">
                    <Calendar className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <h4 className="text-xl font-medium">Kettős nézet</h4>
              </div>
              <p className="mb-3 text-white/80">
                Az esemény oldalon két különböző nézet közül választhatnak a felhasználók:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <h5 className="mb-1 font-medium">Kártya nézet</h5>
                  <p className="text-xs text-white/70">Vizuális, képközpontú megjelenítés</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <h5 className="mb-1 font-medium">Naptár nézet</h5>
                  <p className="text-xs text-white/70">Időalapú, áttekintő megjelenítés</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="relative z-10 mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3"
      >
        <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-transparent p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="rounded-lg bg-black/30 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
            <Image
              src="/images/photo2.png"
              alt="Esemény lista képernyő"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-transparent p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="rounded-lg bg-black/30 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
            <Image
              src="/images/photo1.png"
              alt="Regisztrációs oldal képernyő"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-transparent p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="rounded-lg bg-black/30 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
            <Image
              src="/images/event-project.png"
              alt="Admin panel képernyő"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
