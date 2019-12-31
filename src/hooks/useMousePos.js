import { useState, useEffect } from 'react'

export default function useMousePosition() {
  const initialMousePos = { x: 0, y: 0 }
  const [mousePos, setMousePos] = useState(initialMousePos)

  const handleMouseMove = event => {
    setMousePos({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePos
}
