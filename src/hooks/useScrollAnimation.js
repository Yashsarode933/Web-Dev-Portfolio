import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const useScrollAnimation = ({ delay = 0, margin = '-80px 0px' } = {}) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, margin })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay, ease: 'easeOut' },
    },
  }

  return { ref, controls, variants }
}

