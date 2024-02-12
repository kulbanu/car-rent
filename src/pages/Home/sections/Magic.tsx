import { Section } from '../../../components'
import MagicCard from './components/MagicCard'

export const Magic = () => {
  return (
    <Section className="flex flex-col items-center gap-8 mt-20 ">
      <h2 className="text-4xl w-1/2 font-poppins font-medium text-center">
        Біздің посттарымызбен сіздерге жылулық әкелеміз!
      </h2>
      <div className="flex flex-col w-full justify-between md:flex-row items-center">
        <MagicCard num="one" />
        <MagicCard num="two" />
        <MagicCard num="three" />
        <MagicCard num="four" />
      </div>
    </Section>
  )
}

export default Magic
