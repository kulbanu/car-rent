import { Link } from 'react-router-dom'
import { Section, Logo, Cart, Person, Menu } from '../components'
import { MODALS, modal } from '../mobx/Modal'
import { useState } from 'react'
import { getUserName } from '../utils/auth'

export const NavBar = () => {
  const onCartClick = () => {
    modal.openModal(MODALS.CART_MODAL)
  }
  const [showMenu, setShowMenu] = useState(false)
  const user = !!getUserName()

  return (
    <>
      <Section className="fixed z-40 left-0 top-0 bg-white md:static flex w-full justify-between items-center gap-10 text-dark font-poppins font-medium mt-0">
        <Logo />
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
          <div className="hidden md:flex gap-4 items-center">
            <Link to="/">Басты бет</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/chat">Чат</Link>
            <Link to="/products">Тауарлар</Link>
            <details className="relative dropdown">
              <summary className="m-1 btn">Сервистер</summary>
              <ul className="absolute bg-white p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                <li>
                  <Link to="/calculator">Калькулятор</Link>
                </li>
                <li>
                  <Link to="/calendar">Күнтізбе</Link>
                </li>
              </ul>
            </details>
          </div>
          <div className="flex gap-5 items-center justify-end">
            {user && <Cart onClick={() => onCartClick()} />}
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
          <Link to="/">Басты бет</Link>
          <Link to="/blog">Блог</Link>
          <Link to="/chat">Чат</Link>
          <Link to="/products">Тауарлар</Link>
          <Link to="/calculator">Калькулятор</Link>{' '}
          <Link to="/calendar">Күнтізбе</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
