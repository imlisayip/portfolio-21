import React from 'react'

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
  aspectRatio
}) => {
  // Convert PNG path to WebP path
  const webpSrc = src.replace(/\.png$/, '.webp')

  // Calculate aspect ratio if not provided
  const style = aspectRatio ? { aspectRatio } : {}

  return (
    <div
      className={`relative overflow-hidden ${className}`}
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
          loading={loading}
          decoding={decoding}
          onError={onError}
          className="w-full h-full object-cover"
          style={{
            aspectRatio: aspectRatio || 'auto',
            minHeight: height ? `${height}px` : 'auto'
          }}
        />
      </picture>
    </div>
  )
}

export default OptimizedImage
