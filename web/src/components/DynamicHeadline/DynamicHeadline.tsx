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

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % headlines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="headline-container">
      <h1>Automate</h1>
      <h1>
        <span>like</span>&nbsp;
        <span key={count} className="headline">
          {headlines[count]}
        </span>
      </h1>
    </div>
  )
}

export default DynamicHeadline
