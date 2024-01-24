import { Band, Button } from '../../../components'

export const DreamShop = () => {
  return (
    <Band className=" bg-[url('/assets/siblings.png')] bg-cover min-h-96 flex flex-col gap-10 justify-center items-center">
      <h2 className="font-cherry text-6xl text-center text-white">
        Senin armanyndagy
        <br />
        duken
      </h2>
      <Button transparent>Tapsyrys Beru</Button>
    </Band>
  )
}

export default DreamShop
