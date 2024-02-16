import { useState } from 'react'

const ClickToCopy = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1000) // Popup disappears after 1 second
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleKeyDown = (event) => {
    // Check if 'Enter' or 'Space' key is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      handleCopy()
    }
  }

  return (
    <div
      tabIndex={0}
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      className="relative cursor-pointer text-center"
      role="button"
      aria-pressed="false"
    >
      <p className="highlight">{text}</p>
      {isCopied && (
        <div className="absolute text-center text-sm">Copied to clipboard!</div>
      )}
    </div>
  )
}

export default ClickToCopy
