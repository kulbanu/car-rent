import { Section, Button } from '../../../components'

export const Intro = () => {
  return (
    <Section className="pt-0 relative">
      <img src="/assets/intro.png" />
      <div className="absolute left-0 top-1/3 font-cherry text-7xl text-primary">
        <h1>Alaqai,</h1>
        <h1>Balaqai!</h1>
        <Button>Tapsyrys Beru</Button>
      </div>
    </Section>
  )
}

export default Intro
