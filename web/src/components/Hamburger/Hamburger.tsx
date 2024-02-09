import Icon from '../Icon/Icon'

const Hamburger = ({ isHamburger, toggleNav }) => {
  return (
    <button onClick={toggleNav}>
      {isHamburger ? <Icon id="burger" /> : <Icon id="closex" />}
    </button>
  )
}

export default Hamburger
