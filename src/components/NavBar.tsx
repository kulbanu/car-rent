import { Section, Logo } from '../components'

export const NavBar = () => {
  return (
    <Section className="flex w-full justify-between items-center">
      <div className="flex gap-2">
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
      </div>
      <Logo />
      <div className="flex gap-2">
        <a>Register</a>
        <a>Sign in</a>
      </div>
    </Section>
  )
}

export default NavBar
