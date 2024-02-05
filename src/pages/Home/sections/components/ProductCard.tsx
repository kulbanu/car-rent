import { Link } from 'react-router-dom'
import { Product } from '../../../../types'
import { cart } from '../../../../mobx/Cart'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`${
        cart.cart.some((el) => product.id === el) ? 'bg-secondary' : 'bg-white'
      } max-w-72 rounded-xl hover:shadow-sm hover:scale-105 transition ease-in-out cursor-pointer p-5 flex flex-col justify-center`}
    >
      <img width={150} src={`/assets/products/${product.id}.png`} />
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-thin uppercase">
          {Math.random() > 0.5 ? 'Жеңілдік' : 'Хит тауар'}
        </p>
        <p className="font-semibold text-primary">{product.title}</p>
        <p>{product.price} ₸</p>
      </div>
    </Link>
  )
}

export default ProductCard
