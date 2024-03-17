import { Link } from 'react-router-dom'
import { Product } from '../../../../types'
import { AnchorHTMLAttributes } from 'react'

const ProductCard = ({
  product,
  small = false,
  ...props
}: { product: Product, small?: boolean } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      {...props}
      to={`/product/${product.id}`}
      className={`max-w-72 transition ease-in-out cursor-pointer p-5 flex flex-col items-start`}
    >
      {
        !small && <div className=" bg-secondary z-10 p-4 rounded-xl h-56 bg-opacity-30 hover:shadow-sm ">
        <img
          className="w-48 hover:scale-125 transition-all"
          src={`/assets/products/${product.id}.png`}
        />
        </div>
      }
      <p className="font-medium">{product.title}</p>
      <p className="text-gray-400">₸ {product.price}</p>
    </Link>
  )
}

export default ProductCard
