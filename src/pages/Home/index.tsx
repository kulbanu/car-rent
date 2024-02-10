import { Intro, DreamShop, Magic } from './sections'
import NewArrivals from './sections/NewArrivals'
import BabyNeeds from './sections/BabyNeeds'
import BottomWall from './sections/BottomWall'
import Posts from './sections/Posts'

export function App() {
  return (
    <>
      <Intro />
      <DreamShop />
      <Magic />
      <NewArrivals />
      <Posts />
      <BabyNeeds />
      <BottomWall />
    </>
  )
}
