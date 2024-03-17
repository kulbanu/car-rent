import { cart } from '../../mobx/Cart'
import { products } from '../../pages/Home/products'
import { Button, Section } from '../../components'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import { getUserEmail, getUserName } from '../../utils/auth'

const Order = observer(() => {
  const sendEmail = () => {
    emailjs
      .send(
        'service_0vng8c7',
        'template_f0qc6a6',
        {
          from_name: 'AnaMenBala',
          to_name: getUserName(),
          to_email: getUserEmail(),
          products: cart.cart.map((id) => products[id].title).join(', '),
          total: cart.cart
            .map((id) => products.find((elem) => elem.id === id)?.price || 0)
            .reduce((acc, price) => acc + (price || 0), 0),
        },
        'pmfkH5HobQ84Rqjys'
      )
      .then(
        () => {
          alert('Тапсырысыңыз жасалды!')
        },
        () => {
          alert('FAILED...')
        }
      )
  }

  const onWhatsApp = () => {
    window.open(
      `http://wa.me/+77750514390?text=Сәлеметесіз бе, тапсырыс жасайын деп едім! Тапсырысым: ${cart.cart
        .map((id) => products[id].title)
        .join(', ')}. Барлығы: ${cart.cart
        .map((id) => products.find((elem) => elem.id === id)?.price || 0)
        .reduce((acc, price) => acc + (price || 0), 0)} тг.`,
      '_blank'
    )
  }

  return (
    <Section>
      <h2 className="text-2xl mb-5">Қоржын</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 overflow-y-scroll items-center">
          {cart.cart.map((id) => (
            <Link
              to={`/product/${id}`}
              className="flex bg-gray-100 rounded-xl p-3 gap-4"
              key={id}
            >
              <p className="max-w-36 block overflow-hidden truncate">
                {products[id - 1].title}
              </p>
              <p className="w-20 text-right font-bold">
                {products[id - 1].price} тг
              </p>
            </Link>
          ))}
        </div>
        <p>{`Барлыгы: ${cart.cart
          .map((id) => products.find((elem) => elem.id === id)?.price || 0) // Add the default value of 0 in case the product is not found
          .reduce((acc, price) => acc + (price || 0), 0)} ₸`}</p>
        <div className="flex flex-col gap-3">
          <Button onClick={() => sendEmail()} primary>
            Почта арқылы чек алу
          </Button>
          <Button
            onClick={() => {
              onWhatsApp()
            }}
            className="bg-green-500"
          >
            Whatsapp арқылы тапсырыс беру
          </Button>
        </div>
      </div>
    </Section>
  )
})

export default Order
