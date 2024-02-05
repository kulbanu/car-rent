import { Intro, DreamShop, Magic } from './sections'
import NewArrivals from './sections/NewArrivals'
import BabyNeeds from './sections/BabyNeeds'
import BottomWall from './sections/BottomWall'

export function App() {
  return (
    <>
      <Intro />
      <DreamShop />
      <Magic />
      <NewArrivals />
      <BabyNeeds />
      <BottomWall />
    </>
  )
}
