import { Link } from '@redwoodjs/router'

// import Resume from '/files/YIP_Resume_24.pdf'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between text-center text-sm md:flex-row">
      <div>hello@lisayip.com</div>
      <div className="flex items-center">
        <div>
          <Link
            className="highlight"
            to="https://www.linkedin.com/in/imlisayip/"
          >
            LinkedIn
          </Link>
        </div>
        <span> • </span>
        <div>
          <Link className="highlight" to="https://github.com/imlisayip">
            Github
          </Link>
        </div>
        <span> • </span>
        <div>
          <Link className="highlight" to={'Resume'}>
            Resume
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
