const Heading = ({ text = '', level = 2 }) => {
  const Tag = `h${level}`
  return <Tag>{text}</Tag>
}

export default Heading
