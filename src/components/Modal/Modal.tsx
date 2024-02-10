import { observer } from 'mobx-react-lite'
import { MODALS, modal } from '../../mobx/Modal'
import CartModal from './CartModal'

export const Modal = observer(() => {
  const modalConfig = {
    [MODALS.CART_MODAL]: <CartModal />,
    [MODALS.CONFIRMATION_MODAL]: <CartModal />,
  }

  return (
    <div
      className="fixed z-30 top-0 left-0 w-screen h-screen items-center
      justify-center"
      style={{ display: modal.status ? 'flex' : 'none' }}
    >
      <div
        className="absolute w-full h-full bg-black z-10 bg-opacity-70"
        onClick={() => modal.closeModal()}
      />
      {modal.modal ? modalConfig[modal.modal] : null}
    </div>
  )
})

export default Modal
