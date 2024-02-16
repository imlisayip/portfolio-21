import { Link } from '@redwoodjs/router'

interface TextStylerProps {
  link?: string
  caret?: boolean
  children: React.ReactNode
  highlight?: boolean
}

const TextStyler = ({
  link,
  caret = false,
  children,
  highlight = false,
}: TextStylerProps) => {
  const classList = `${highlight ? 'highlight' : ''}
   ${caret && !highlight ? 'uppercase text-sm' : ''}`

  const content = `${children} ${caret ? ' »' : ''}`

  if (link) {
    return (
      <Link className={classList} to={link}>
        {content}
      </Link>
    )
  }

  return <div className={classList}>{content}</div>
}

export default TextStyler
