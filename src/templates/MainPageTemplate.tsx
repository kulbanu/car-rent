import { NavBar, Modal, Footer } from '../components'
import { Outlet } from 'react-router-dom'
import { ScrollToTop } from '../utils/scrollToTop'

export const MainPageTemplate = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden">
      <NavBar />
      <div className="mb-auto mt-16 md:mt-0">
        <Outlet />
      </div>
      <Footer className="self-end" />
      <Modal />
      <ScrollToTop />
    </div>
  )
}

export default MainPageTemplate
