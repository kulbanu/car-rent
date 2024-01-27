import { NavBar, TopHeader, Footer } from '../components'
import { Outlet } from 'react-router-dom'

export const MainPageTemplate = () => {
  return (
    <div className="min-h-screen relative">
      <TopHeader />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainPageTemplate
