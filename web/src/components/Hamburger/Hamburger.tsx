import Icon from '../Icon/Icon'

const Hamburger = ({ isHamburger, toggleNav }) => {
  return (
    <button className="flex bg-amber-600 " onClick={toggleNav}>
      {isHamburger ? (
        <Icon id="burger" size={20} />
      ) : (
        <Icon id="closex" size={30} />
      )}
    </button>
  )
}

export default Hamburger
