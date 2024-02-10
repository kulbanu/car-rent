import { Link } from 'react-router-dom'

export const Logo = ({ contrast = false }: { contrast?: boolean }) => {
  return (
    <Link to="/" className="flex flex-col jusify-center items-center w-fit">
      <span
        className={`font-oranienbaum text-2xl text-center uppercase ${
          contrast ? 'text-white' : 'text-black'
        }`}
      >
        AnaMenBala
      </span>
    </Link>
  )
}

export default Logo
