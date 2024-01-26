import { Section } from '../../../components'

const BabyNeeds = () => {
  return (
    <Section className="w-full grid grid-cols-2 mt-16 gap-20 items-center">
      <img src="assets/babyneeds.png" />
      <div className="flex flex-col gap-8">
        <h2 className="font-cherry text-5xl text-primary uppercase">
          Everything a baby needs
        </h2>
        <div>
          <p>Monday/Friday 9:00-23:00</p>
          <p>Saturday 10:00-21:00</p>
        </div>
        <div>
          <p>+012-345-6789</p>
          <p>TheWildKingdom@contact.com</p>
          <p>9889 Lorem Ipsum street, Pellentesque, CA, USA</p>
        </div>
      </div>
    </Section>
  )
}

export default BabyNeeds
