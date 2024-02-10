import { useParams } from 'react-router-dom'
import { Button, Section } from '../../components'
import { products } from '../Home/products'
import { cart } from '../../mobx/Cart'
import { observer } from 'mobx-react-lite'

export const Product = observer(() => {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id || '1'))
  return (
    product && (
      <Section className="flex flex-col items-center">
        <div className="bg-white p-10 w-72 h-72 rounded-full">
          <img
            className="cursor-zoom-in hover:scale-[2.5] transition-all"
            width={300}
            src={`/assets/products/${product.id}.png`}
          />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-thin uppercase">
            {Math.random() > 0.5 ? 'Жеңілдік' : 'Хит тауар'}
          </p>
          <p className="font-semibold text-primary">{product.title}</p>
          <p>{product.price} ₸</p>
          <p>{product.description}</p>
          {cart.cart.some((el) => el === product.id) ? (
            <Button onClick={() => cart.deleteProduct(product.id)}>
              Алып тастау
            </Button>
          ) : (
            <Button onClick={() => cart.addProduct(product.id)}>
              Қоржынға қосу
            </Button>
          )}
        </div>
      </Section>
    )
  )
})

export default Product
