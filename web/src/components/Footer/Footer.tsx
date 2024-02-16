import ClickToCopy from '../ClickToCopy/ClickToCopy'
import TextStyler from '../TextStyler/TextStyler'

const Footer = ({ linkedin, github, resume }) => {
  return (
    <footer className="flex flex-col items-center justify-between md:flex-row">
      <div className="p-5">
        <ClickToCopy text="hello@lisayip.com" />
      </div>

      <div className="flex items-center">
        <div className="p-5 hover:text-gray-800">
          <TextStyler highlight link={linkedin}>
            LinkedIn
          </TextStyler>
        </div>
        <span> • </span>
        <div className="p-5 hover:text-gray-800">
          <TextStyler highlight link={github}>
            Github
          </TextStyler>
        </div>
        <span> • </span>
        <div className="p-5 hover:text-gray-800">
          <TextStyler highlight link={resume}>
            Resume
          </TextStyler>
        </div>
      </div>
    </footer>
  )
}

export default Footer
