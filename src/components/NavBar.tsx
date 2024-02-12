import { Link } from 'react-router-dom'
import { Section, Logo, Cart, Person, Menu } from '../components'
import { MODALS, modal } from '../mobx/Modal'
import { useState } from 'react'

export const NavBar = () => {
  const onCartClick = () => {
    modal.openModal(MODALS.CART_MODAL)
  }
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Section className="fixed z-40 left-0 top-0 bg-white md:static flex w-full justify-between items-center gap-10 text-dark font-poppins font-medium mt-0">
        <Logo />
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
          <div className="hidden md:flex gap-4">
            <Link to="/">Басты бет</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/products">Тауарлар</Link>
            <Link to="/chat">Чат</Link>
          </div>
          <div className="flex gap-5 items-center justify-end">
            <Cart onClick={() => onCartClick()} />
            <Person />
            <div className="static md:hidden border-r-2 border-1 border-black h-5" />
            <Menu
              className="static md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </Section>
      <div>
        <div
          className={`fixed z-30 transition-all ${
            showMenu ? 'top-12' : 'top-[-200px]'
          } shadow-xl left-0 flex flex-col items-center text-center w-full bg-white gap-2 p-2`}
          onClick={() => setShowMenu(false)}
        >
          <Link className="border-black border-b-2 w-3/4" to="/">
            Басты бет
          </Link>
          <Link className="border-black border-b-2 w-1/2" to="/blog">
            Блог
          </Link>
          <Link to="/chat">Чат</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
