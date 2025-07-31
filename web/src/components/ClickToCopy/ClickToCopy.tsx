import { useState } from 'react'

interface ClickToCopyProps {
  text: string
  className?: string
  onCopy?: () => void
}

const ClickToCopy = ({ text, className = '', onCopy }: ClickToCopyProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      onCopy?.()
      setTimeout(() => setIsCopied(false), 2000) // Popup disappears after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setIsCopied(true)
        onCopy?.()
        setTimeout(() => setIsCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Check if 'Enter' or 'Space' key is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCopy()
    }
  }

  return (
    <div
      tabIndex={0}
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      className={`relative cursor-pointer text-center ${className}`}
      role="button"
      aria-label={`Copy ${text} to clipboard`}
    >
      {isCopied && (
        <div
          className="absolute bottom-6 right-0 text-center text-sm bg-green-100 text-green-800 px-2 py-1 rounded shadow-sm"
          role="status"
          aria-live="polite"
        >
          Copied to clipboard!
        </div>
      )}
      <p className="highlight">{text}</p>
    </div>
  )
}

export default ClickToCopy
