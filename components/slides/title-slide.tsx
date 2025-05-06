"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TitleSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12 text-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10 blur-[80px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="mx-auto mb-10 w-[350px]"
        >
          <div className="relative">
            {/* Logo glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-[40px]"
            />

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-events-hub-Q6hAWTKmH6da4jM4oNjWWOr218HOIB.png"
              alt="EventHub Logo"
              width={350}
              height={140}
              className="relative z-10 mx-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            />
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
    </div>
  )
}
