import { Intro, KeyWordsLine, DreamShop, Magic } from './sections'

import { NavBar, TopHeader } from '../../components'

function App() {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <Intro />
      <KeyWordsLine />
      <DreamShop />
      <Magic />
    </div>
  )
}

export default App
