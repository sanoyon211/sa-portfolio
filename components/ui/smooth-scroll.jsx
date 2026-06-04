"use client"

import React, { useCallback, useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform, useIsomorphicLayoutEffect } from "framer-motion"

export const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0)

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.target.scrollHeight)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current)
      // Initial height
      setPageHeight(scrollRef.current.scrollHeight)
    }
    return () => resizeObserver.disconnect()
  }, [onResize, children])

  const { scrollY } = useScroll()
  
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}
