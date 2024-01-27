import { Intro, KeyWordsLine, DreamShop, Magic } from './sections'
import NewArrivals from './sections/NewArrivals'
import BabyNeeds from './sections/BabyNeeds'
import BottomWall from './sections/BottomWall'

export function App() {
  return (
    <>
      <Intro />
      <KeyWordsLine />
      <DreamShop />
      <Magic />
      <NewArrivals />
      <BabyNeeds />
      <BottomWall />
    </>
  )
}
