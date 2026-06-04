"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export const Parallax = ({ children, offset = 50 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: springY }}>
      {children}
    </motion.div>
  )
}
