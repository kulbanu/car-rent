import { Section } from '../../../components'

const BabyNeeds = () => {
  return (
    <Section className="w-full grid-cols-2 mt-16 gap-20 items-center hidden md:grid">
      <img src="assets/babyneeds.png" />
      <div className="flex flex-col gap-8">
        <h2 className="font-cherry font-poppins md:text-2xl font-medium font-style: italic; uppercase">
          Кішкентай ғажайыптарға қамқорлық жасаудың жауапты және қуанышты
          жолында аналарды қолдау!
        </h2>
      </div>
    </Section>
  )
}

export default BabyNeeds
