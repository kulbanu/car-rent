import { Band, Logo, Section } from '.'

const Footer = () => {
  return (
    <Band className="bg-primary py-20 mb-0">
      <Section className="grid grid-cols-3 gap-16">
        <div className="text-center">Sitemap</div>
        <div className="flex justify-center">
          <Logo contrast />
        </div>
        <div className="w-48 text-white text-2xl font-cherry">
          Make your child’s wardrobe brighter with us
        </div>
      </Section>
    </Band>
  )
}

export default Footer
