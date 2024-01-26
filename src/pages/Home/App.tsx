import { Intro, KeyWordsLine, DreamShop, Magic } from './sections'
import { NavBar, TopHeader } from '../../components'
import NewArrivals from './sections/NewArrivals'
import BabyNeeds from './sections/BabyNeeds'
import BottomWall from './sections/BottomWall'
import Footer from '../../components/Footer'

export function App() {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <Intro />
      <KeyWordsLine />
      <DreamShop />
      <Magic />
      <NewArrivals />
      <BabyNeeds />
      <BottomWall />
      <Footer />
    </div>
  )
}
