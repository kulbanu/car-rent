import { Link } from 'react-router-dom'
import { Band, Button } from '../../../components'

export const DreamShop = () => {
  return (
    <Band className=" bg-[url('/assets/siblings.png')] bg-cover min-h-96 flex flex-col gap-10 justify-center items-center">
      <h2 className="font-poppins md:text-4xl text-center text-white">
        Блогымызға кіріп
        <br />
        сан-алуан сұрақтарға жауап ал!
      </h2>
      <Link to="/blog">
        <Button transparent>Блог оқу</Button>
      </Link>
    </Band>
  )
}

export default DreamShop
