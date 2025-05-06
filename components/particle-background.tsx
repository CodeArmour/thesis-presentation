"use client"

import { useRef, useEffect } from "react"
import { type MotionValue, useTransform } from "framer-motion"

interface ParticleBackgroundProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function ParticleBackground({ mouseX, mouseY }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const mouseXTransformed = useTransform(mouseX, [-0.5, 0.5], [-50, 50])
  const mouseYTransformed = useTransform(mouseY, [-0.5, 0.5], [-50, 50])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.2 - 0.1
        this.speedY = Math.random() * 0.2 - 0.1

        // Colors: purple, blue, and white with varying opacity
        const colors = [
          `rgba(168, 85, 247, ${Math.random() * 0.4 + 0.1})`, // Purple
          `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.1})`, // Blue
          `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`, // White
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.8 + 0.2
      }

      update(mouseXOffset: number, mouseYOffset: number) {
        this.x += this.speedX + mouseXOffset * 0.01
        this.y += this.speedY + mouseYOffset * 0.01

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(window.innerWidth * window.innerHeight * 0.0001, 150)

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let mouseXOffset = 0
    let mouseYOffset = 0

    const unsubscribeX = mouseXTransformed.onChange((latest) => {
      mouseXOffset = latest
    })

    const unsubscribeY = mouseYTransformed.onChange((latest) => {
      mouseYOffset = latest
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mouseXOffset, mouseYOffset)
        particle.draw()
      })

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      unsubscribeX()
      unsubscribeY()
    }
  }, [mouseXTransformed, mouseYTransformed])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />
}
