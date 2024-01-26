import { Section } from '../../../components'
import MagicCard from './components/MagicCard'

export const Magic = () => {
  return (
    <Section className="flex flex-col items-center gap-8 mt-20">
      <h2 className="text-4xl w-1/2 font-cherry text-primary text-center">
        TWE BRING MAGIC IN YOUR HOMESWITH OUR ASSORTMENT
      </h2>
      <div className="flex w-full justify-between">
        <MagicCard num="one" />
        <MagicCard num="two" />
        <MagicCard num="three" />
        <MagicCard num="four" />
      </div>
    </Section>
  )
}

export default Magic
