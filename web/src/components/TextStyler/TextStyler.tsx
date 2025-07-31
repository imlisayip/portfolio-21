import React from 'react'

interface TextStylerProps {
  link?: string
  caret?: boolean
  children: React.ReactNode
  highlight?: boolean
}

const TextStyler = React.memo(({
  link,
  caret = false,
  children,
  highlight = false,
}: TextStylerProps) => {
  const classList = React.useMemo(() => {
    const classes = []
    if (highlight) classes.push('highlight')
    if (caret && !highlight) classes.push('uppercase text-sm')
    return classes.join(' ')
  }, [highlight, caret])

  const content = React.useMemo(() => {
    return `${children} ${caret ? ' »' : ''}`
  }, [children, caret])

  if (link) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={classList}
        href={link}
      >
        {content}
      </a>
    )
  }

  return <div className={classList}>{content}</div>
})

TextStyler.displayName = 'TextStyler'

export default TextStyler
