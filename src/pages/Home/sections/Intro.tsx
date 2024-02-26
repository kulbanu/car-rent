import { Link } from 'react-router-dom'
import { Section, Button } from '../../../components'

export const Intro = () => {
  return (
    <Section className="px-8 py-4 relative bg-primary rounded-xl flex flex-col xl:flex-row justify-between">
      <div className="font-poppins font-bold text-4xl md:text-7xl">
        <h1>Өмірдің алғашқы</h1>
        <h1 className="text-3xl mb-6">
          күндерінен бастап қамқорлық пен махаббат!
        </h1>
        <div className="flex gap-5 font-medium">
          <div>
            <p className="text-3xl">50+</p>
            <p className="text-2xl">Арнайы пост</p>
          </div>
          <div className="border-r-2 h-16 border-black" />
          <div>
            <p className="text-3xl">100+</p>
            <p className="text-2xl">Ерекше тауар</p>
          </div>
        </div>
        <Link to="/chat">
          <Button>Жасанды интеллектті қолдану</Button>
        </Link>
      </div>
      <img width={500} src="/assets/intro.png" />
    </Section>
  )
}

export default Intro
