'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

export interface BeforeAfterSliderProps {
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
  initialPosition?: number
}

export const BeforeAfterSlider = ({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  initialPosition = 50,
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(initialPosition)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, newPosition)))
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-col-resize select-none overflow-hidden rounded-lg bg-nevoa"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        className="object-cover"
        draggable={false}
      />

      {/* After Image Overlay */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-verde-serra cursor-col-resize transition-shadow duration-200 hover:shadow-lg"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-verde-serra rounded-full flex items-center justify-center shadow-lg pointer-events-none">
          <svg className="w-6 h-6 text-off-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M9 19l7-7-7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-md left-md text-off-white text-sm font-medium bg-preto-quente/40 px-md py-sm rounded pointer-events-none">
        Antes
      </div>
      <div className="absolute top-md right-md text-off-white text-sm font-medium bg-preto-quente/40 px-md py-sm rounded pointer-events-none">
        Depois
      </div>
    </div>
  )
}

export default BeforeAfterSlider
