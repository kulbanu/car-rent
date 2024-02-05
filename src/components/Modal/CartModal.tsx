import { observer } from 'mobx-react-lite'
import { cart } from '../../mobx/Cart'
import { products } from '../../pages/Home/products'
import { Delete } from '..'

const CartModal = observer(() => {
  return (
    <div className="z-30 bg-white rounded-xl overflow-scroll h-3/4 w-3/4 flex flex-col items-center p-5 gap-4">
      <h2 className="text-2xl">Қоржын</h2>
      <div className="flex flex-col gap-3">
        {cart.cart.map((id) => (
          <div
            className="flex relative justify-between border-secondary border-2 rounded-md p-3"
            key={id}
          >
            <p>{products.find((elem) => elem.id === id)?.title}</p>
            <p>{products.find((elem) => elem.id === id)?.price} ₸</p>
            <Delete
              className=" cursor-pointer"
              onClick={() => cart.deleteProduct(id)}
            />
          </div>
        ))}
      </div>
      <p>{`Барлыгы: ${cart.cart
        .map((id) => products.find((elem) => elem.id === id)?.price || 0) // Add the default value of 0 in case the product is not found
        .reduce((acc, price) => acc + (price || 0), 0)} ₸`}</p>
    </div>
  )
})

export default CartModal
