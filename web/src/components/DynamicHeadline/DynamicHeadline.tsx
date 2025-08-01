import React, { useState, useEffect } from 'react'

const headlines = [
  'you',
  'magic',
  'a pro',
  'the future',
  'lightning',
  'a leader',
  'a trendsetter',
  'an innovator',
  'an explorer',
]

const DynamicHeadline = () => {
  const [count, setCount] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % headlines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [isMounted])

  return (
    <div className="headline-container">
      <h1>Automate</h1>
      <h1>
        <span>like</span>&nbsp;
        <span key={count} className="headline">
          {isMounted ? headlines[count] : headlines[0]}
        </span>
      </h1>
    </div>
  )
}

export default DynamicHeadline
