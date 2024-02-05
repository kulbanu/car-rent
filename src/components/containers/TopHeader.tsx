import { TypeAnimation } from 'react-type-animation'
import Band from './Band'
import Section from './Section'
import Cart from '../icons/Cart'
import { MODALS, modal } from '../../mobx/Modal'

export const TopHeader = () => {
  const onCartClick = () => {
    modal.openModal(MODALS.CART_MODAL)
  }
  return (
    <Band className="bg-primary fixed z-10 text-white">
      <Section className="flex justify-between">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Жастарга арналған',
            500, // wait 1s before replacing "Mice" with "Hamsters"
            'Аналарға арналға күшті',
            500,
            'Аналарға арналға ыңғайлы замануи вебсайт!',
            1000,
          ]}
          wrapper="span"
          speed={50}
        />
        <Cart onClick={() => onCartClick()} />
      </Section>
    </Band>
  )
}

export default TopHeader
