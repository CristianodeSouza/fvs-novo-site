import React from 'react'
import Image from 'next/image'

interface ImageFrameProps {
  src: string
  alt: string
  ratio?: '16/9' | '4/3' | '1/1' | '3/2'
  className?: string
}

export const ImageFrame = ({
  src,
  alt,
  ratio = '16/9',
  className = '',
}: ImageFrameProps) => {
  const aspectRatioMap = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${aspectRatioMap[ratio]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
