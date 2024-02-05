import { Link } from 'react-router-dom'
import { Section, Logo } from '../components'

export const NavBar = () => {
  return (
    <Section className="flex pt-16 w-full justify-between items-center text-dark">
      <div className="flex gap-2">
        <Link to="/">Басты бет</Link>
        <Link to="/blog">Блог</Link>
        <Link to="/chat">Чат</Link>
      </div>
      <Logo />
      <div className="flex gap-2">
        <a>Тіркелу</a>
        <a>Кіру</a>
      </div>
    </Section>
  )
}

export default NavBar
