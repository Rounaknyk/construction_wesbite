'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Counter = ({ value, duration = 800 }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = parseInt(value)
          const incrementTime = Math.max(30, duration / end)
          
          const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start >= end) {
              clearInterval(timer)
            }
          }, incrementTime)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [value, duration, hasAnimated])

  return (
    <motion.span
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count} {value === 100 ? '%' : '+'}
    </motion.span>
  )
}

export default Counter