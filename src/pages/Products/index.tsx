import { Section } from '../../components'
import { products } from '../Home/products'
import ProductCard from '../Home/sections/components/ProductCard'

export const Products = () => {
  return (
    <Section>
      <h1 className="font-medium">Тауарлар</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Section>
  )
}

export default Products
