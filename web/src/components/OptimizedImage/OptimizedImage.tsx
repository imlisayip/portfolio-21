import React, { useState, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  width?: number
  height?: number
  aspectRatio?: string
  priority?: boolean
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  onError,
  width,
  height,
  aspectRatio,
  priority = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Convert PNG path to WebP path
  const webpSrc = src.replace(/\.png$/, '.webp')

  // Calculate aspect ratio if not provided
  const style = aspectRatio ? { aspectRatio } : {}

  // Preload critical images
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = webpSrc
      document.head.appendChild(link)

      return () => {
        document.head.removeChild(link)
      }
    }
  }, [priority, webpSrc])

  const handleLoad = () => {
    setImageLoaded(true)
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true)
    if (onError) {
      onError(e)
    }
  }

  return (
    <div
      className={`relative overflow-hidden ${className} ${imageLoaded ? 'image-loaded' : ''}`}
      style={style}
    >
      <picture>
        {/* WebP version for modern browsers */}
        <source srcSet={webpSrc} type="image/webp" />

        {/* PNG fallback for older browsers */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={decoding}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageError ? 'hidden' : ''}`}
          style={{
            aspectRatio: aspectRatio || 'auto',
            minHeight: height ? `${height}px` : 'auto'
          }}
        />
      </picture>

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: aspectRatio || 'auto' }}
        />
      )}
    </div>
  )
}

export default OptimizedImage
