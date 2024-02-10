import { Link } from 'react-router-dom'
import { Button, Section } from '../../../components'
import { products } from '../products'
import ProductCard from './components/ProductCard'

const NewArrivals = () => {
  return (
    <Section className="flex flex-col md:flex-row gap-8 mt-16 items-center">
      <div className="w-full flex flex-col max-w-48 gap-3">
        <h1 className="text-xl font-bold uppercase">Біздің үздіу тауарлар</h1>
        <p className="text-gray-500">
          Сізге арналған сан-алуан тауарлар мен заттар
        </p>
        <Link to="/products">
          <Button primary>Барлығымен танысу</Button>
        </Link>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => {
          if (product.bestSelling) return <ProductCard product={product} />
        })}
      </div>
    </Section>
  )
}

export default NewArrivals
