import { NavBar, Modal, Footer } from '../components'
import { Outlet } from 'react-router-dom'

export const MainPageTemplate = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <NavBar />
      <Outlet />
      <Footer className=" self-end" />
      <Modal />
    </div>
  )
}

export default MainPageTemplate
