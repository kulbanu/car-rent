import { Button, Section } from '../../../components'
import ProductCard from './components/ProductCard'
import Stars from './components/Stars'

const NewArrivals = () => {
  return (
    <Section className="flex flex-col gap-8 mt-16">
      <div className="w-full flex justify-between relative">
        <Stars className="absolute left-[-135px] top-[-135px] scale-50" />
        <h1 className="font-cherry text-4xl text-primary uppercase">
          New Arrivals
        </h1>
        <Button>Explore</Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {new Array(10).fill(<ProductCard />)}
      </div>
    </Section>
  )
}

export default NewArrivals
