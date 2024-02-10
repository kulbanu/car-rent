import { Link } from 'react-router-dom'
import { Band, Fb, Insta, Logo, Section, Tw } from '.'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <Band className={`bg-primary py-5 md:py-20 ${className}`}>
      <Section className="flex justify-center md:justify-between">
        <div className="flex flex-col max-w-64 justify-center gap-2">
          <Logo />
          <p className="text-gray-500">
            Біздің вебсайт сізге пайдалы болды деп сенеміз
          </p>
          <div className="flex gap-3">
            <div className="border-2 w-8 h-8 flex items-center justify-center border-gray-500 rounded-full">
              <Fb />
            </div>
            <div className="border-2 w-8 h-8 flex items-center justify-center border-gray-500 rounded-full">
              <Tw />
            </div>
            <div className="border-2 w-8 h-8 flex items-center justify-center border-gray-500 rounded-full">
              <Insta />
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Информация</h3>
            <Link className="text-gray-500" to="/">
              Басты бет
            </Link>
            <Link className="text-gray-500" to="/">
              Блог
            </Link>
            <Link className="text-gray-500" to="/">
              Чат
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Вебсайт</h3>
            <Link className="text-gray-500" to="/">
              Басты бет
            </Link>
            <Link className="text-gray-500" to="/">
              Блог
            </Link>
            <Link className="text-gray-500" to="/">
              Чат
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Байланыс</h3>
            <Link className="text-gray-500" to="/">
              Басты бет
            </Link>
            <Link className="text-gray-500" to="/">
              Блог
            </Link>
            <Link className="text-gray-500" to="/">
              Чат
            </Link>
          </div>
        </div>
      </Section>
    </Band>
  )
}

export default Footer
