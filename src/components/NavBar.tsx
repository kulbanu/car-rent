import { Link } from 'react-router-dom'
import { Section, Logo, Cart, Person, Menu } from '../components'
import { MODALS, modal } from '../mobx/Modal'

export const NavBar = () => {
  const onCartClick = () => {
    modal.openModal(MODALS.CART_MODAL)
  }
  return (
    <Section className="flex w-full justify-between items-center gap-10 text-dark font-poppins font-medium mt-0">
      <Logo />
      <div className="flex justify-between flex-1">
        <div className="flex gap-2">
          <Link to="/">Басты бет</Link>
          <Link to="/blog">Блог</Link>
          <Link to="/chat">Чат</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Cart onClick={() => onCartClick()} />
          <Person />
          <div className=" border-r-2 border-1 border-black h-5" />
          <Menu />
        </div>
      </div>
    </Section>
  )
}

export default NavBar
